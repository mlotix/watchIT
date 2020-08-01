export const state = () => ({
    logged: false,
    user: null,
    token: null,
    token_expires_at: null,
    refresh_token: null,
    id: null
  })

export const mutations = {
  SET_LOGGED(state, payload) {
    if(payload) {
      state.logged = true
    }
    else {
      state.logged = false
    }
  },
  SET_USER(state, { id, name, email, verified, admin }) {
    state.user = { id, name, email, verified, admin }
  },
  REMOVE_USER(state) {
    state.user = null
  },
  SET_ID(state, payload) {
    state.id = payload
    localStorage.setItem('id', payload)
  },
  REMOVE_ID(state, payload) {
    state.id = null
    localStorage.removeItem('id')
  },
  SET_TOKEN(state, { token, expiration, refresh_token }) {
    state.token = token
    const expires = state.token_expires_at = parseInt(Date.now()) + (parseInt(expiration) * 1000)
    state.refresh_token = refresh_token
    localStorage.setItem('token', token)
    localStorage.setItem('token_expires_at', expires)
    localStorage.setItem('refresh_token', refresh_token)
  },
  REVOKE_TOKEN(state) {
    state.token = null
    state.refresh_token = null
    state.token_expires_at = null
    localStorage.removeItem('token')
    localStorage.removeItem('token_expires_at')
    localStorage.removeItem('refresh_token')
  },
  INITIALIZE_USERDATA(state) {
    const token = localStorage.getItem('token')
    const expires = localStorage.getItem('token_expires_at')
    const ref_token = localStorage.getItem('refresh_token')
    const id = localStorage.getItem('id')

    if(token && expires && id) {
      state.token = token
      state.token_expires_at = expires
      state.refresh_token = ref_token
      state.id = parseInt(id,10)
      state.logged = true
      this.$axios.setToken(token, 'Bearer')
    }

  }
}

export const actions = {
  setLogged({state, commit}, payload) {
    commit('SET_LOGGED', payload)
  },
  setUser({commit}, payload) {
    commit('SET_USER', payload)
  },
  setToken({commit}, {token, expiration, refresh_token}) {
    commit('SET_TOKEN',{token, expiration, refresh_token})
    this.$axios.setToken(token, 'Bearer')
  },
  setId({commit}, payload) {
    commit('SET_ID', payload)
  },
  logoutUser({commit, state}) {
    commit('REVOKE_TOKEN')
    commit('REMOVE_USER')
    commit('REMOVE_ID')
    commit('SET_LOGGED', false)
  },
  async refreshUserToken({state, dispatch}) { //SPRAWDZIC CZY DZIALA
    if(state.refresh_token == null) {
      dispatch('logoutUser')
    }

    const refresh_token = state.refresh_token

    try {
      const res = await this.$axios.$post('http://storeapi.test/api/refresh', {
        refresh_token: refresh_token
      })
      const payload = {
        token: res.access_token,
        expiration: res.expires_in,
        refresh_token: res.refresh_token
      }
      dispatch('setToken', payload)
    } catch (e) {
      if(e.response) {
        if(e.response.data.code === 401 || e.response.status === 401) {
          dispatch('logoutUser')
          return
        }
        else if(e.response.data.code >= 500 || e.response.status >= 500) {
          console.log(e.response)
          return
        } else {
          dispatch('logoutUser')
        }
      }
    }
  },
  async initializeUserdata({commit, state, dispatch}) {
    commit('INITIALIZE_USERDATA')

    //checking if token is valid
    if(state.logged && state.token) {
      if(Date.now() > state.expires_at) {
        dispatch('LogoutUser')
        return
      }
    }
    //fetching user information
    try {
      const res = await this.$axios.$get('http://storeapi.test/api/user')

      const user = {
        id: res.data.id,
        name: res.data.name,
        email: res.data.email,
        verified: res.data.verified,
        admin: res.data.admin
      }

      dispatch('setUser', user)
    } catch (e) {
      if(e.response) {
          if(e.response.data.code === 401 || e.response.status === 401) {
            disptach('refreshUserToken')
          }
          else if(e.response.data.code >= 500 || e.response.status >= 500) {
            console.log(e.response)
          }
          else {
            console.log(e.response)
            dispatch('logoutUser')
          }
      }
    }

  }
}
