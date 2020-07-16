<template>
<div>
  <div class=" tracking-tight text-center">
    <div class="flex flex-col items-center justify-center h-60view px-2 py-5">
      <img src="~/assets/images/exclamation-circle-solid.svg" alt="error" class="h-12 my-2">
      <h2 class="text-3xl">Ups! Error {{ errorData.code ? errorData.code : '404' }}</h2>
      <p class="text-lg font-light">{{ errorData.data ? errorData.data : 'Page does not exist' }}</p>
      <button @click="goBack" class="hover:bg-blue-featured text-black bg-gray-light py-3 px-4 rounded mt-6 text-sm mx-auto">Go back</button>
    </div>
  </div>
</div>
</template>

<script>
import Vuex from 'vuex'
export default {
  props: {
    errorData: {
      required: true
    }
  },
  methods: {
    goBack: function () {
      if(window.history.length > 2) {
        this.$router.go(-1)
      }
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped >
.featured-wrapper {
  position: relative;
  height: 75vh;
  width: 100%;
  background: rgba(212, 218, 225, .80);
}
</style>
