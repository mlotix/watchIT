<template>
  <div class="featured-watches-wrapper tracking-tighter p-5 lg:p-8">
    <a class="hover:underline" href="#" title="See more watches"><h1 class="font-sans text-2xl lg:text-3xl text-left font-bold">Featured watches</h1></a>
    <div class="grid grid-cols-2 grid-rows-4 md:grid-rows-2 md:grid-cols-4 row-gap-4 col-gap-3 xl:col-gap-5 w-full py-3">
      <div class="featured-watches-card text-center px-1 py-3 shop-card" v-for="(watch, index) in watches"  :key="index">
        <img :src="watch.image" :alt="watch.name" class="max-w-70p max-h-70p mx-auto">
        <p class="text-lg lg:text-xl font-semibold my-2">{{ watch.name }}</p>
        <p class="text-xl lg:text-2xl font-light"> {{ '$' + watch.price }} </p>
          <button class="bg-blue text-white hover:bg-blue-light py-4 px-5 rounded mt-2 text-md w-4/5 mx-auto">Add to cart</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
 data () {
   return {
     watches: [
       {
         name: 'Samsung Galaxy Watch SM-1342525252 Smartwatch',
         price: 329.99,
         image: 'http://localhost:3000/_nuxt/assets/images/samsung.jpg',
       },
       {
         name: 'Samsung Galaxy Watch SM-1342525252 Smartwatch',
         price: 329.99,
         image: 'http://localhost:3000/_nuxt/assets/images/samsung.jpg',
       },
       {
         name: 'Samsung Galaxy Watch SM-1342525252 Smartwatch',
         price: 329.99,
         image: 'http://localhost:3000/_nuxt/assets/images/samsung.jpg',
       },
       {
         name: 'Samsung Galaxy Watch SM-1342525252 Smartwatch',
         price: 329.99,
         image: 'http://localhost:3000/_nuxt/assets/images/samsung.jpg',
       },
       {
         name: 'Samsung Galaxy Watch SM-1342525252 Smartwatch',
         price: 329.99,
         image: 'http://localhost:3000/_nuxt/assets/images/samsung.jpg',
       },
       {
         name: 'Samsung Galaxy Watch SM-1342525252 Smartwatch',
         price: 329.99,
         image: 'http://localhost:3000/_nuxt/assets/images/samsung.jpg',
       },
       {
         name: 'Samsung Galaxy Watch SM-1342525252 Smartwatch',
         price: 329.99,
         image: 'http://localhost:3000/_nuxt/assets/images/samsung.jpg',
       },
       {
         name: 'Samsung Galaxy Watch SM-1342525252 Smartwatch',
         price: 329.99,
         image: 'http://localhost:3000/_nuxt/assets/images/samsung.jpg',
       }
     ]
   }
 }
}
</script>

<style lang="css" scoped >
</style>
