<template>
  <div class="featured-watches-card text-center px-1 py-3 shop-card flex flex-col justify-between bg-white cursor-pointer" @click.prevent="goToProduct(product.id)">
    <img :src="product.image" :alt="product.name" class=" mx-auto">
    <p class="text-md lg:text-lg font-semibold my-2 product-name">{{ product.name }}</p>
    <p class="text-lg lg:text-xl font-light"> {{ price }} </p>
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
 },
 methods: {
   goToProduct(id) {
     this.$router.push('/product/' + id)
   }
 }
}
</script>

<style lang="css" scoped >
.product-name {
  max-height: 85px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
