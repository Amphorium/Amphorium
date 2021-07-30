
<template>
  <div id="preloader">
     <!-- <LottieAnimation
      path="./animationPreloader.json"
      background="transparent"
      :speed="1"
      :width="300"
      :height="300"
      :autoPlay="true"
     /> -->
    <!-- <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_mapud5ay.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player> -->
  </div>
</template>
<script>
  // import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
  export default {
    name: "Preloader",
    components: {
        // LottieAnimation
    },
  }
</script>
<style lang="scss">
    #preloader{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items:center;
        z-index: 1500000;

        left: 0;top: 0;right: 0;bottom: 0;
        background: rgba(0,0,0,0.95);
        // background: rgba(255,255,255,0.3);

      img {
        background: black;
        border: 10px solid #000000;
        border-radius: 50%;
        width: 265px;
        height: 265px;
        object-fit: none;
      }
    }
</style>


