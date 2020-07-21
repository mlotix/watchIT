<template>
<div class="heading-wrapper tracking-tight bg-gray-light px-30 py-2 md:py-5 w-full flex flex-col md:flex-row items-center justify-center md:justify-end md:sticky md:top-0 z-10">
<a href="#" @click.prevent="goToIndex" class="md:mr-auto">
  <img src="~/assets/images/watchITlogo.svg" class="h-12 md:h-14 lg:h-16" alt="WatchIT logo"/>
</a>
<div class="search-bar md:self-end bg-white font-sans m-3 h-12 flex justify-between px-4 rounded w-full md:max-w-sm lg:max-w-md">
  <input type="text" name="search" placeholder="Search for watches..." class="font-sans text-base h-12 focus:outline-none w-4/5" alt="search">
  <img src="~/assets/images/search-solid.svg" class="h-5 self-center transform scale-x-invert opacity-35 cursor-pointer"/>
</div>
<div class="heading-icon flex justify-around md:justify-end w-full md:w-auto pt-3 pb-2">
  <a href="#" class="flex flex-col justify-center items-center px-6 md:px-5 hover:text-gray-dark hover:underline">
    <fa-icon :icon="['fas', 'shopping-cart']" size="lg"></fa-icon>
    <p class="mt-1 text-xs lg:text-sm">
      Basket
    </p>
  </a>
  <a class="flex flex-col justify-center items-center px-6 md:px-5 group hover:text-gray-dark hover:underline">
    <span class="block group-hover:hidden">
      <fa-icon :icon="['far', 'heart']" size="lg"></fa-icon>
    </span>
    <span class="hidden group-hover:inline text-red">
      <fa-icon :icon="['fas', 'heart']" size="lg"></fa-icon>
    </span>
    <p class="mt-1 text-xs lg:text-sm">
      Wishlist
    </p>
  </a>
  <a class="flex flex-col justify-center items-center px-6 md:px-5 hover:text-gray-dark hover:underline relative">
    <fa-icon :icon="['fas', 'user']" size="lg"></fa-icon>
    <p class="mt-1 text-xs lg:text-sm">
      Account
    </p>
  </a>
</div>
</div>
</template>

<script>
export default {
  methods: {
    goToIndex() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped >

</style>
