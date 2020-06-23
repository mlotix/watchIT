<template>
  <div class="wrapper">
    <div class="min-h-80 bg-blue text-white text-lg font-medium tracking-tight flex flex-row items-center justify-start z-10">
      <span v-for="(category, index) in categories"  :key="index"
      class="inline-block px-5 hover:underline">
        <a>{{ category.name }}</a>
      </span>
    </div>
  </div>

</template>

<script>
import { mapState } from 'Vuex'
export default {
  computed: mapState({
     categories: state => state.menu.categories
   })
}
</script>

<style lang="css" scoped >

</style>
