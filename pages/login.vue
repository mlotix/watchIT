<template>
  <main class="w-full">
    <Heading></Heading>
    <mobile-menu class="block md:hidden"></mobile-menu>
    <standard-menu class="hidden md:block"></standard-menu>
    <login-panel></login-panel>
    <global-footer></global-footer>
  </main>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      logged: 'userdata/logged'
    })
  },
  created: function () {
      if (this.$store.state.userdata.logged === true) {
        this.$router.push('/account')
      }
  }
}
</script>

<style lang="css" scoped >
</style>
