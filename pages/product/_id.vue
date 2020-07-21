<template>
  <main class="w-full">
    <Heading id="heading"></Heading>
    <mobile-menu class="block md:hidden"></mobile-menu>
    <standard-menu class="hidden md:block"></standard-menu>

    <global-error v-if="error" :error-data='error'></global-error>

    <div class="bg-white-dark" v-else>
      <div class="product-header pb-8 md:pb-10 shadow-md bg-white">
        <div class="m-6 md:m-10 lg:m-auto lg:my-12 max-w-screen-lg" >
          <div class="flex flex-col md:flex-row items-center">
            <product-gallery class="w-full md:w-2/5 p-3" :image-link="product.image" @toggle-preview="togglePreview"></product-gallery>
            <product-info class="md:w-3/5" :product-id="product.id" :name="product.name" :price="product.price" :quantity="product.quantity" :seller="product.seller[0]" :brand="product.brand[0]"></product-info>
          </div>
        </div>
      </div>

      <div class="m-6 md:m-10 lg:m-auto lg:my-12 max-w-screen-lg" >
        <product-desc :desc="product.desc" class="mt-12 p-3"></product-desc>
      </div>

      <div class="bg-white">
        <div class="m-6 md:m-10 lg:m-auto lg:my-12 max-w-screen-lg pt-6" >
          <product-featured class="p-3"></product-featured>
        </div>
      </div>

    </div>

    <product-preview v-if="previewOpen" :image="product.image" class="w-screen h-screen" @toggle-preview="togglePreview"></product-preview>
    <global-footer></global-footer>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, error, params}) {

    try {
      const product = await $axios.get('http://storeapi.test/api/products/' + params.id)

      return {
        product: product.data.data,
        productMeta: product.data.meta ? product.data.meta : null,
        id: params.id,
      }
    } catch (e) {
      if(e.response) {
        return {
          error: e.response.data
        }
      }
      else {
        return {
          error: { code: 404, data: 'there was an error fetching your data'}
        }
      }
    }
  },
  data () {
    return {
      error: null,
      previewOpen: false
    }
  },
  methods: {
    togglePreview () {
      this.previewOpen = !this.previewOpen
    }
  }
}
</script>

<style lang="css" scoped >
</style>
