<template>
<div class="flex items-center justify-center fixed bg-gray-dark fixed top-0 z-10" @click.self="$emit('toggle-preview')">
  <div class="preview-container bg-white">
    <div class="preview-content" :style="{ backgroundImage: 'url(' + image + ')' }">
      <button class="py-2 px-3 close-preview hover:opacity-75" @click="$emit('toggle-preview')">
        <fa-icon :icon="['fas', 'times']" size="2x"></fa-icon>
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
 props: {
   image: {
     type: String,
     required: true
   }
 }
}
</script>

<style lang="css" scoped >
  .preview-container {
    position: relative;
    width: 60%;
    width: 80vmin;
  }
  .preview-container::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  .preview-content {
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .close-preview {
    float: right;
  }
</style>
