<template>
<div>
  <div class="cat-heading-wrapper tracking-tight text-center bg-gray-light">
    <div class="flex flex-col items-center justify-center px-10 py-12 lg:px-20">
      <h1 class="text-3xl md:text-4xl font-semibold mb-4">{{ item.name }}</h1>
      <p class="text-sm md:text-md">
        {{ item.desc }}
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
 props: {
   item: {
     type: Object,
     required: true
   }
 }
}
</script>

<style lang="css" scoped >
</style>
