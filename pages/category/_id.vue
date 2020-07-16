<template>
  <main class="w-full">
    <Heading id="heading"></Heading>
    <mobile-menu class="block md:hidden"></mobile-menu>
    <standard-menu class="hidden md:block"></standard-menu>

    <global-error v-if="error" :error-data='error'></global-error>

    <template v-else>
      <cat-heading :item="category"></cat-heading>
      <div class="cat-wrapper flex flex-col justify-around items-center">
        <cat-products class="md:max-w-75p px-2":products="products"></cat-products>
        <cat-paginator v-if="pages.total > 1" :current="pages.current" :total="pages.total" :start="pages.start" :max-visible-pages="maxVisiblePages"
          @page-change="changePage"></cat-paginator>
      </div>
    </template>

    <global-footer></global-footer>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, error, params, query, route }) {
    let productsUrl = 'http://storeapi.test/api/categories/' + params.id + '/products?per_page=24'
    if(query.page) {
      const page = parseInt(query.page, 10)
      if(page > 1) {
        productsUrl = productsUrl + "&page=" + page
      }
    }

    try {
      const category = await $axios.get('http://storeapi.test/api/categories/' + params.id)
      const products = await $axios.get(productsUrl)

      return {
        products: products.data.data,
        productsMeta: products.data.meta ? products.data.meta : null,
        category: category.data.data,
        categoryMeta: category.data.meta ? category.data.meta : null,
        id: params.id,
      }
    } catch (e) {
      return {
        error: e.response.data
      }
    }
  },
  data () {
    return {
      error: null,
      maxVisiblePages: 7  //this is for pagination
    }
  },
  methods: {
    async changePage(page) {
      if(!Number.isInteger(page)) {
        return
      }
      if(page < this.pages.start || page > this.pages.total || page === this.pages.current) {
        return
      }

      this.$nuxt.$loading.start()

      try {
        const products = await this.$axios.get('http://storeapi.test/api/categories/' + this.id + '/products?per_page=24&page=' + page)
        this.products = products.data.data,
        this.productsMeta = products.data.meta ? products.data.meta : null

      } catch (e) {
          this.error = e.response.data
      } finally {
        if(this.pages.current > 1) {
          this.$router.replace({ query: {page: this.pages.current}})
        }
        else {
          this.$router.replace({ query: ''})
        }
        this.$nuxt.$loading.finish()
        window.scroll(0, 200)
      }
    }
  },
  computed: {
    pages: function () {
      return {
        start: 1,
        total: this.productsMeta.pagination.total_pages,
        current: this.productsMeta.pagination.current_page
      }
    }
  }
}
</script>

<style lang="css" scoped >

</style>
