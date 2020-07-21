<template>
  <div class="gallery-wrapper">
    <div @click="$emit('toggle-preview')" class="gallery-main-photo w-full relative border-solid border-gray-light rounded-md shadow-md cursor-pointer">
      <div class="gallery-main-image absolute w-full h-full" :style="{ backgroundImage: 'url(' + imageLink + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', transform: 'scale(0.9, 0.9)' }"></div>
    </div>
  </div>
</template>

<script>
export default {
 props: {
   imageLink: {
     type: String,
     required: true
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
