<template>
  <div class="swiss-wrapper bg-white z-10 flex flex-col-reverse md:flex-row items-center md:justify-between p-8 md:p-12 lg:p-24">
    <div class="tracking-tighter text-center md:text-left">
      <h1 class="tracking-tighter font-semibold leading-10 md:leading-none mb-1">Luxury Swiss Watches</h1>
      <p class="tracking-tighter font-normal text-2xl md:text-3xl">
        Explore the best quality watches from Switzerland
      </p>
      <button class="bg-blue text-white hover:bg-blue-light p-5 rounded my-3">Explore Swiss watches</button>
    </div>
    <img src="~/assets/images/swiss.png" class="swiss-flag w-32 md:w-40 m-5 md:m-0"/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped >
  .swiss-flag {
    opacity: .75;
  }
  .swiss-wrapper {
    position: relative;
    z-index: 1;
    height: 500px;
    width: 100%;
    background: url('/_nuxt/assets/images/swiss-mount.jpg') no-repeat;
    background-size: cover;
    background-position: center;
  }
 .swiss-wrapper:before {
   background: rgba(255, 255, 255, .45);
   position: absolute;
   display: block;
   top:0;
   right:0;
   width: 100%;
   height: 500px;
   content: " ";
   z-index: -1;
 }
 h1 {
   font-size: 38px ;
 }
 @media (min-width:768px) {
   h1 {
     font-size: 45px;
   }
 }
 @media (min-width:1024px) {
   h1 {
     font-size: 60px;
   }
   p {
     max-width:500px;
   }
 }
</style>
