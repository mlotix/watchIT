<template>
  <div class="paginator-wrapper mt-6 flex flex-row font-semibold">
    <div>
      <button class="hover:bg-gray-light rounded py-5 pl-3 md:pl-4 pr-4 md:pr-5" :class="[current > 1 ? '' : 'invisible']" @click="changePage(current - 1)">
        <img src="~/assets/images/chevron-left-solid.svg" class="h-4 md:h-6 cursor-pointer"/>
      </button>
    </div>
      <button class="font-medium p-2half text-sm md:text-base md:p-5 mx-1 rounded outline-none"
      :class="[current === page ? currentPageClasses : '', page === '...' ? 'cursor-default' : 'hover:bg-gray-light']"
      v-for="(page, index) in visiblePages"  :key="index" @click="changePage(page)">
        {{ page }}
      </button>
    <div>
      <button class="hover:bg-gray-light rounded py-5 pr-3 md:pr-4 pl-4 md:pl-5" :class="[current < total ? '' : 'invisible']" @click="changePage(current + 1)">
        <img src="~/assets/images/chevron-right-solid.svg" class="h-4 md:h-6 cursor-pointer"/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
      validator: (total) => {
        return total > 0
      }
    },
    start: {
      type: Number,
      required: false,
      default: 1,
      validator: (start) => {
        return start > 0
      }
    },
    current: {
      type: Number,
      required: true,
      validator: (current) => {
        return current > 0
      }
    },
    maxVisiblePages: {
      type: Number,
      required: false,
      default: 7,
      validator: (maxVisiblePages) => {
        return maxVisiblePages > 5
      }
    }

  },
  data () {
    return {
      currentPageClasses: 'bg-blue text-white hover:bg-blue-light'
    }
  },
  methods: {
    changePage(page) {
      if(!Number.isInteger(page)) {
        return
      }
      if(page > this.total || page < this.start) {
        console.error('invalid page number')
        return
      }
      if(page === this.current) {
        return
      }

      this.$emit('page-change', page)
    }
  },
  computed: {
    visiblePages () {
      let toFilter = [
        ...Array(this.total).keys()
      ]
      toFilter.forEach( (value, index, array) => {
        array[index] = ++value
      })
      let maxPages = 7
      if (this.maxVisiblePages % 2 === 0) {
        maxPages = this.maxVisiblePages + 1
      }
      else {
        maxPages = this.maxVisiblePages
      }

      if(maxPages >= toFilter.length) {
        return toFilter
      }
      let diffLast = this.total - this.current
      let diffFirst = this.current - this.start

      if(diffLast <= (maxPages / 2 - 1)) {
        toFilter = toFilter.splice((maxPages - 2) * (-1))
        toFilter.unshift('...')
        toFilter.unshift(1)
      }
      else if(diffFirst <= (maxPages / 2 - 1)) {
        toFilter = toFilter.splice(0, (maxPages - 2))
        toFilter.push('...')
        toFilter.push(this.total)
      }
      else {
        const pagesLeft = maxPages - 4  //this can only be an odd number
        const startIndex = this.current  - ((maxPages - 1) / 2) + 1
        toFilter = toFilter.splice(startIndex , pagesLeft)
        toFilter.push('...')
        toFilter.push(this.total)
        toFilter.unshift('...')
        toFilter.unshift(1)
      }



      return toFilter
    }
  }
}
</script>

<style lang="css" scoped >

</style>
