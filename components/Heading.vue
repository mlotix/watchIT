<template>
<div class="heading-wrapper tracking-tight bg-gray-light px-30 py-2 md:py-5 w-full flex flex-col md:flex-row items-center justify-center md:justify-end md:sticky md:top-0 z-10">
<img src="~/assets/images/watchITlogo.svg" class="h-12 md:h-14 lg:h-16 md:mr-auto" alt="WatchIT logo"/>
<div class="search-bar md:self-end bg-white font-sans m-3 h-12 flex justify-between px-4 rounded w-full md:max-w-sm lg:max-w-md">
  <input type="text" name="search" placeholder="Search for watches..." class="font-sans text-base h-12 focus:outline-none w-4/5" alt="search">
  <img src="~/assets/images/search-solid.svg" class="h-5 self-center transform scale-x-invert opacity-35 cursor-pointer"/>
</div>
<div class="heading-icon flex justify-around md:justify-end w-full md:w-auto pt-3 pb-2">
  <a href="#" class="flex flex-col justify-center px-6 md:px-5 hover:text-gray-dark hover:underline">
    <img src="~/assets/images/shopping-cart-solid.svg" alt="shopping cart" class="h-5 lg:h-6">
    <p class="mt-1 text-xs lg:text-sm">
      Basket
    </p>
  </a>
  <a class="flex flex-col justify-center px-6 md:px-5 hover:text-gray-dark hover:underline">
    <img src="~/assets/images/heart-solid.svg" alt="shopping cart" class="h-5 lg:h-6">
    <p class="mt-1 text-xs lg:text-sm">
      Wishlist
    </p>
  </a>
  <a class="flex flex-col justify-center px-6 md:px-5 hover:text-gray-dark hover:underline">
    <img src="~/assets/images/user-solid.svg" alt="shopping cart" class="h-5 lg:h-6">
    <p class="mt-1 text-xs lg:text-sm">
      Account
    </p>
  </a>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped >

</style>
