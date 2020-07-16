<template>
  <div>
    <div class="grid grid-cols-2 md:grid-cols-4 row-gap-4 col-gap-3 xl:col-gap-5 w-full py-3">
      <global-card v-for="(product, index) in products"  :key="index" :product="product"></global-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="css" scoped >

</style>
