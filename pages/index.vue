<template>
  <main class="w-full">
    <Heading></Heading>
    <mobile-menu class="block md:hidden"></mobile-menu>
    <standard-menu class="hidden md:block"></standard-menu>
    <home-featured></home-featured>
    <home-watches></home-watches>
    <home-swiss></home-swiss>
    <home-forman></home-forman>
    <img class="hidden" src="~/assets/images/samsung.jpg" />
    <img class="hidden" src="~/assets/images/hugo.jpg" />
    <global-footer></global-footer>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped >
 main {
   min-height: 200vh;
 }
</style>
