<template>
  <div class="main-wrapper">
    <landing-header></landing-header>
    <landing-main></landing-main>
    <landing-footer></landing-footer>
  </div>
</template>

<script>
  import LandingFooter from "../components/landing/LandingFooter";
  import LandingHeader from "../components/landing/LandingHeader";
  import LandingMain from "../components/landing/LandingMain";
  export default {
    name: 'Landing',
    components: {LandingMain, LandingHeader, LandingFooter}
  }
</script>
