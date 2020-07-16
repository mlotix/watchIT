<template>
  <div class="featured-watches-wrapper tracking-tighter p-5 lg:p-8">
    <a class="hover:underline" href="#" title="See more watches"><h1 class="font-sans text-2xl lg:text-3xl text-left font-bold">Watches for man</h1></a>
    <div class="grid grid-cols-2 grid-rows-6 md:grid-rows-3 md:grid-cols-4 lg:grid-rows-2 lg:grid-cols-6 row-gap-4 col-gap-3 xl:col-gap-5 w-full py-3">
      <global-card v-for="(watch, index) in watches"  :key="index" :product="watch"></global-card>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    watches: {
      required: true
    }
  }
}
</script>

<style lang="css" scoped >
</style>
