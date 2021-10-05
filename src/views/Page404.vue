<template>
  <div class="page404">
    <LandingHeader/>
    <div class="container">
      <div class="page404__img">
        <span class="page404__num">4</span>
        <img src="@/assets/img/404-img.png" alt="">
        <span class="page404__num">4</span>
      </div>

      <div class="page404__text">
        Opps, sorry we can't find that page!
      </div>

      <div class="main-banner__btn">
        <router-link to="/" class="my-btn">
          <span class="my-btn__arrow"></span>
          <span class="my-btn__content">Main page</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LandingHeader from "../components/landing/LandingHeader";

export default {
  name: "Page404",
  components: {
    LandingHeader
  }
}
</script>

<style scoped>

</style>