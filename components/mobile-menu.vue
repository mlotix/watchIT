<template>
<div class="mobile-menu-wrapper z-10">
  <div class="w-full text-lg font-semibold tracking-tight text-white">
    <button class="open-menu flex justify-between align-center w-full p-5 bg-blue font-semibold focus:outline-none font-sans"
    @click="this.toggle_open">
      Menu
      <img v-if="!this.open" src="~/assets/images/chevron-down-solid.svg" class="h-5 mx-5 my-auto"/>
      <img v-else src="~/assets/images/chevron-up-solid.svg" class="h-5 mx-5 my-auto"/>
    </button>
    <div v-if="this.open" class="mobile-menu bg-blue">

      <div v-for="(category, $index) in categories"  :key="$index">
        <button class="open-menu flex justify-between align-center w-full px-5 py-3 font-medium focus:outline-none" @click="toggle_cat($index)">
          {{ category.name }}
          <img v-if="!open_cat[$index]" src="~/assets/images/chevron-down-solid.svg" class="h-3 mx-5 my-auto"/>
          <img v-else src="~/assets/images/chevron-up-solid.svg" class="h-3 mx-5 my-auto"/>
        </button>
        <div v-if="open_cat[$index]"class="bg-gray-light text-black px-5">Categories</div>
        <button v-if="open_cat[$index]" class="open-menu flex justify-between align-center w-full px-5 py-1 uppercase tracking-wide font-regular text-xs focus:outline-none bg-gray-light text-black"
         v-for="cat in category.cats"  :key="cat">
          {{ cat.name }}
        </button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'Vuex'
export default {
  data () {
    return {
      open: false,
      open_cat: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ]
    }
  },
  methods: {
    toggle_open() {
      this.open = !this.open
    },
    toggle_cat(index) {
        this.$set(this.open_cat, index, !this.open_cat[index])
    }
  },
  computed: mapState({
    categories: state => state.menu.categories
  })
}
</script>

<style lang="css" scoped >

</style>
