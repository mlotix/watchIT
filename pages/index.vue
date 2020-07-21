<template>
  <main class="w-full">
    <Heading></Heading>
    <mobile-menu class="block md:hidden"></mobile-menu>
    <standard-menu class="hidden md:block"></standard-menu>
    <home-featured></home-featured>
    <home-watches :watches="watches1"></home-watches>
    <home-swiss></home-swiss>
    <home-forman :watches="watches2"></home-forman>
    <img class="hidden" src="~assets/images/swiss-mount.jpg" />
    <img class="hidden" src="~/assets/images/hugo.jpg" />
    <global-footer></global-footer>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, error }) {
    const watches2 = await $axios.get('http://storeapi.test/api/categories/1/products?per_page=12')

    const watches1 = await $axios.get('http://storeapi.test/api/products?per_page=8')

    return {
      watches2: watches2.data.data,   //add error handling
      watches1: watches1.data.data
    }
  }
}
</script>

<style lang="css" scoped >
 main {
   min-height: 200vh;
 }
</style>
