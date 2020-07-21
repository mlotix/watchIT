<template>
  <div class="product-info-wrapper p-3">
    <div>
      <h1 class="font-medium text-xl lg:text-2xl tracking-tight">{{ name }}</h1>
      <div class="text-sm opacity-85 text-thin">
        <span class="text-sm opacity-85 text-thin">ID: {{ processedId }}</span>
        <span class="mx-3 text-sm opacity-75 text-thin">Brand: {{ brand.name }}</span>
        <span class="text-sm opacity-75 text-thin">Seller: {{ seller.name }}</span>
      </div>
      <div class="product-stock flex flex-row justify-start items-center mt-5">
        <span v-if="status === 0">
          <fa-icon icon="times" class="h-4 mr-2" :class="stockColor"></fa-icon>
        </span>
        <span v-else>
          <fa-icon icon="check" class="mr-2" size:="lg" :class="stockColor"></fa-icon>
        </span>
        <span :class="stockColor">{{ inStock }}</span>
      </div>
      <span class="font-medium text-2xl lg:text-3xl mb-5">{{ dollarPrice }}</span>

      <div class="flex flex-col items-start">
        <div class="flex flex-col-reverse md:flex-row justify-center md:justify-start items-start md:items-center md:mt-3">
          <div class="amount-selector rounded flex flex-row shadow mt-6 md:mt-3 mb-3 md:mr-4">
            <button @click.prevent="amountDown" type="button" class="focus:outline-none inline p-3 px-4 flex items-center bg-gray-light hover:bg-gray rounded-l">
              <fa-icon icon="minus"></fa-icon>
            </button>
            <input  v-model="selectedAmount" type="text" class="bg-white w-12 p-2 overflow-hidden text-2xl text-center" maxlength="2"/>
            <button @click.prevent="amountUp" type="button" class="focus:outline-none inline p-3 px-4 flex items-center bg-gray-light hover:bg-gray rounded-r">
              <fa-icon icon="plus"></fa-icon>
            </button>
          </div>
          <span class="tracking-tight font-light text-xs lg:text-sm"><span class="font-semibold">Order now</span> and get your items delivered in <span class="font-semibold">2-4</span> days!</span>
        </div>
        <div class="flex flex-row items-center justify-between w-full">
          <button class="focus:outline-none bg-blue text-white hover:bg-blue-light py-4 px-5 rounded text-md mx-auto shadow md:my-0 flex-grow">Add to cart</button>
          <fa-icon :icon="['far', 'heart']" class="text-gray hover:text-red ml-5 rounded" size="2x"></fa-icon>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
 props: {
   productId: {
     type: Number,
     required: true,
     validator: (productId) => {
       return productId > 0
     }
   },
   name: {
     type: String,
     required: true
   },
   price: {
     type: Number,
     required: true,
     validator: (price) => {
       return price > 0 && price < 100000
     }
   },
   quantity: {
     type: Number,
     required: true,
     validator: (quantity) => {
       return quantity >= 0
     }
   },
   seller: {
     type: Object,
     required: true,
     validator: (seller) => {
       return seller.id >= 0 && seller.name
     }
   },
   brand: {
     type:Object,
     required: true,
     validator: (brand) => {
       return brand.id >= 0 && brand.name
     }
   }
 },
 data () {
   return {
     status: 2,
     selectedAmount: 1
   }
 },
 methods: {
   amountUp () {
    this.selectedAmount++
   },
   amountDown () {
    this.selectedAmount--
   }
 },
 computed: {
   inStock() {
     if(this.quantity <= 0) {
       this.status = 0
       return 'Out of stock'
     }
     else if(this.quantity <= 5) {
       this.status = 1
       return 'Only ' + this.quantity + ' left in stock!'
     }
     this.status = 2
     return 'In stock'
   },
   stockColor() {
     if(this.quantity <= 0) {
       return 'text-red'
     }
     else if(this.quantity <= 5) {
       return 'text-orange'
     }
     return 'text-green'
   },
   dollarPrice() {
     const price = '$' + this.price
     const regex = /\.\d$/
     if(price.match(regex)) {
       return price + '0'
     }
     return price
   },
   processedId() {
     let id = this.productId.toString()
     id = id.padStart(7, '0')

     return id
   }
 },
 watch: {
   selectedAmount: function () {
     if(this.selectedAmount < 1) {
       this.selectedAmount = 1
     }
     if(this.selectedAmount > 10) {
       this.selectedAmount = 10
     }
   }
 }
}
</script>

<style lang="css" scoped >
.gallery-main-photo::after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
</style>
