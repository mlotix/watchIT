<template>
  <div class="product-desc-wrapper">
    <h1 class="font-sans text-xl lg:text-2xl text-left font-bold tracking-tight">Description</h1>
    <div class="font-light py-3">
      <p class="tracking-tight py-1">
        {{ desc }}
      </p>
      <p class="tracking-tight py-1">
        {{ lorum }}
      </p>
      <p class="tracking-tight py-1">
        {{ lorum }}
      </p>
      <p class="tracking-tight py-1">
        {{ lorum }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
 props: {
   desc: {
     type: String,
     required: true
   }
 },
 data () {
   return {
     lorum: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.'
   }
 }
}
</script>

<style lang="css" scoped >

</style>
