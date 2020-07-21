<template>
  <div class="product-featured-wrapper">
    <h1 class="font-sans text-xl lg:text-2xl text-left font-bold tracking-tight">More items</h1>
    <div class="grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 row-gap-4 col-gap-3 xl:col-gap-5 w-full py-3">
      <global-card v-for="(watch, index) in watches"  :key="index" :product="watch"></global-card>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      error: false,
      watches: null
    }
  },
  mounted: async function () {
    try {
      const page = Math.floor((Math.random() * 20) + 1)
      const products = await this.$axios.get('http://storeapi.test/api/products?per_page=4&page=' + page)

      this.watches = products.data.data
    } catch (e) {
      this.error = true
    }
  }
}
</script>

<style lang="css" scoped >

</style>
