<template>
  <div class="featured-watches-wrapper tracking-tighter p-5 lg:p-8">
    <a class="hover:underline" href="#" title="See more watches"><h1 class="font-sans text-2xl lg:text-3xl text-left font-bold">Watches for man</h1></a>
    <div class="grid grid-cols-2 grid-rows-6 md:grid-rows-3 md:grid-cols-4 lg:grid-rows-2 lg:grid-cols-6 row-gap-4 col-gap-3 xl:col-gap-5 w-full py-3">
      <global-card v-for="(watch, index) in watches"  :key="index" :product="watch"></global-card>

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
       },
       {
         name: 'HUGO BOSS HB1513580 TALENT 42MM',
         price: 149.99,
         image: 'http://localhost:3000/_nuxt/assets/images/hugo.jpg',
       },
       {
         name: 'HUGO BOSS HB1513580 TALENT 42MM',
         price: 149.99,
         image: 'http://localhost:3000/_nuxt/assets/images/hugo.jpg',
       },
       {
         name: 'HUGO BOSS HB1513580 TALENT 42MM',
         price: 149.99,
         image: 'http://localhost:3000/_nuxt/assets/images/hugo.jpg',
       },
       {
         name: 'HUGO BOSS HB1513580 TALENT 42MM',
         price: 149.99,
         image: 'http://localhost:3000/_nuxt/assets/images/hugo.jpg',
       }
     ]
   }
 }
}
</script>

<style lang="css" scoped >
</style>
