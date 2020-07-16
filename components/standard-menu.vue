<template>
  <div class="wrapper">
    <div class="min-h-80 bg-blue text-white text-lg font-medium tracking-tight flex flex-row items-center justify-start z-10">
      <a v-for="(category, index) in categories"  :key="index"
      class="inline-block px-5 hover:underline" :href="'/category/' + (index+1)"
      @click.prevent="goToCategory(index)">
        <span>{{ category.name }}</span>
      </a>
    </div>
  </div>

</template>

<script>
import { mapState } from 'Vuex'
import Vuex from 'Vuex'
export default {
  computed: mapState({
    categories: state => state.menu.categories
   }),
  methods: {
    goToCategory(index) {
      if(index !== 7){
        this.$router.push('/category/' + (index + 1) )
      }
    }
  }
}
</script>

<style lang="css" scoped >

</style>
