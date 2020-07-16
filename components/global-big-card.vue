<template>
  <div class="featured-watches-card text-center px-1 py-3 shop-card flex flex-col justify-between">
    <img :src="product.image" :alt="product.name" class="max-w-70p max-h-70p mx-auto">
    <p class="text-lg lg:text-xl font-semibold my-2">{{ product.name }}</p>
    <p class="text-xl lg:text-2xl font-light"> {{ price }} </p>
      <button class="bg-blue text-white hover:bg-blue-light py-4 px-5 rounded mt-2 text-md w-4/5 mx-auto">Add to cart</button>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    price() {
      const price = '$' + this.product.price
      const regex = /\.\d$/
      if(price.match(regex)) {
        return price + '0'
      }
      return price
    }
  }
 }
</script>

<style lang="css" scoped >

</style>
