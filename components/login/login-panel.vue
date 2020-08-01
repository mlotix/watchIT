<template>
  <div class="login-panel m-6 md:m-10 lg:m-12 tracking-tight">
    <h1 class="font-sans text-xl lg:text-2xl text-left font-bold tracking-tight px-2">Log in to your account</h1>

    <form class="login-form max-w-sm my-5">
      <div v-if="error" class="my-2 text-red">
        {{ error }}
      </div>
      <div class="login-email mb-4">
        <label for="email" class="block px-2">Email
        </label>
        <input v-model.trim="$v.email.$model" :class="{ 'border-red text-red' : $v.email.$error}"
        type="text" name="email" class="font-sans text-base h-12 focus:outline-none w-full rounded bg-white px-4 border border-gray bg-white-dark focus:border-black" alt="search">
        <div v-if="$v.email.$dirty && !$v.email.required" class="font-light text-sm my-1 px-2 block text-red">Email is required.</div>
        <div v-if="$v.email.$dirty && !$v.email.email" class="font-light text-sm my-1 px-2 block text-red">Email must be valid.</div>
      </div>

      <div class="login-pass mb-4">
        <label for="password" class="block px-2">Password
        </label>
        <input v-model.trim="$v.password.$model" :class="{ 'border-red' : $v.password.$error}"
        type="password" name="password" class="font-sans text-base h-12 focus:outline-none w-full rounded bg-white px-4 border border-gray bg-white-dark focus:border-black">
        <div v-if="$v.password.$dirty && !$v.password.required" class="font-light text-sm my-1 px-2 block text-red">Password is required.</div>
        <div v-if="$v.password.$dirty && !$v.password.minLength" class="font-light text-sm my-1 px-2 block text-red">Password is too short.</div>
      </div>

      <button type="submit" @click.prevent="logIn" class="bg-blue text-white hover:bg-blue-light py-4 px-10 rounded mt-2 text-md mx-auto">Log in</button>
    </form>

    <a class="font-light text-md my-1 block hover:underline cursor-pointer">Forgot the password? Reset it here.</a>
    <a class="font-light text-md my-1 block hover:underline cursor-pointer">Don't have an account? Register here.</a>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { getUser } from '~/traits/user_token'
export default {
  data () {
    return {
      email: null,
      password: null,
      error: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(4)
    }
  },
  methods: {
    logIn: async function() {
      if(this.$v.anyError || this.$v.$invalid) {
        return
      }

      try {
        const response1 = await this.$axios.$post('http://storeapi.test/api/login', {
          username: this.email,
          password: this.password
        })
        this.$store.dispatch('userdata/setLogged', true)
        const tokens = {
          'token': response1.access_token,
          'expiration': response1.expires_in,
          'refresh_token': response1.refresh_token,
        }
        this.$store.dispatch('userdata/setToken', tokens)

        const response2 = await this.$axios.$get('http://storeapi.test/api/user')
        const res2_data = response2.data

        console.log('Teraz: ' + Date.now())
        console.log('Wygasniecie: ' + Date.now() + response1.expires_in * 1000)

        const user = {
          id: res2_data.id,
          name: res2_data.name,
          email: res2_data.email,
          verified: res2_data.verified,
          admin: res2_data.admin
        }
        this.$store.dispatch('userdata/setUser', user)
        this.$store.dispatch('userdata/setId', res2_data.id)

        this.error = null
      } catch (e) {
        console.log(e)
      } finally {
        console.log('heh')
      }

/*

      this.$axios.post('storeapi.test/oauth/token', {
        client_secret: 'ii7iAuj3qb5lBtfKSmYqfHImvaPMXASpmXwGKkAr',
        client_id: 2,
        grant_type: 'password',
        scope: 'manage-account read-stats purchase-product manage-products',
        username: this.email,
        password: this.password
      })
      .then( (response) => {
        this.error = null
        this.$store.dispatch('userdata/setLogged', true)
        const res = response.data
        const token = {
          token: res.token,
          expiration: res.token_expires_at,
          ref_token:
        }
        this.$store.dispatch('userdata/setToken', token)

        return
        const user = {
          id: response2.id,
          name: response2.name,
          email: response2.email,
          verified: response2.verified,
          admin: response2.admin
        }

        this.$store.dispatch('userdata/setUser', user)
        this.$store.dispatch('userdata/setId', res.id)

        this.$router.push('/account') //add redirect functionality
      })
      .then( (response) => {

      })
      .catch( (e) => {
        if(e.response) {
          if(e.response.data.message) {
            this.error = e.response.data.message
          }
          if(e.response.data.data) {
            this.error = e.response.data.data
          }
        } else {
          console.log(e);
        }
      }) */
    }
  }
}
</script>

<style lang="css" scoped >
</style>
