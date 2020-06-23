<template>
<div>
  <div class="featured-wrapper tracking-tight text-center md:text-left">
    <div class="flex flex-col md:flex-row items-center md:justify-center h-75view px-2 py-5">
      <img src="~/assets/images/watches3.png" alt="watches" class="w-25vmax">
      <div>
        <h1 class="font-bold tracking-tight">Watch it</h1>
        <h2 class="font-medium tracking-tight md:ml-1">Biggest watch marketplace</h2>
        <h3 class="font-light tracking-tight mt-2 md:ml-1 md:mr-auto">Find thousands of watches watches watcheswatches
          watches watches watches watches watches watches</h3>
          <button class="bg-blue text-white hover:bg-blue-light p-5 rounded my-4">Explore the watches</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped >
.featured-wrapper {
  position: relative;
  height: 75vh;
  width: 100%;
  background: rgba(212, 218, 225, .80);
}
.featured-wrapper::before {
  background: url('/evening-55067.png') no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  display: block;
  top: 0;
  right:0;
  width: 100%;
  height: 75vh;
  content: " ";
  z-index: -2;
}
h1 {
  font-size: 40px ;
}
h2 {
  font-size: 22px;
}
h3 {
  font-size: 16px;
  max-width: 300px;
}
@media (min-width:768px) {
  h1 {
    font-size: 72px;
  }
  h2 {
    font-size: 28px;
  }
  h3 {
    font-size: 19px;
    max-width: 350px;
  }
}
@media (min-width:1024px) {
  h3 {
    max-width:500px;
  }
}
</style>
