<template>
  <div class="main-wrapper">
    <landing-header></landing-header>
    <landing-main
     @mousemove="textLighting" 
      @mouseleave="resetTextLighting"
    />
    <landing-footer
      @mousemove="textLighting" 
      @mouseleave="resetTextLighting"
    />
  </div>
</template>

<script>
  import LandingFooter from "../components/landing/LandingFooter";
  import LandingHeader from "../components/landing/LandingHeader";
  import LandingMain from "../components/landing/LandingMain";

  export default {
    name: 'Landing',
    components: {LandingMain, LandingHeader, LandingFooter},
    methods: {
       textLighting(e){
          // console.log('ev',e);
        // this.$refs.textGradient.style.backgroundImage=`radial-gradient(circle at ${e.layerX}px ${e.layerY}px, rgb(209, 12, 12) 0%, #fff 6rem)`;
        // this.$refs.textGradient.style.color='transparent'
        if ( document.querySelector('.text-gradient') ){
          document.querySelector('.text-gradient').style.backgroundImage=`radial-gradient(circle at ${e.offsetX}px ${e.offsetY}px, rgb(209, 12, 12) 0%, #fff 6rem)`;
          document.querySelector('.text-gradient').style.color='transparent';
          // document.querySelector('.text-gradient').style.backgroundClip = "text";
        }
      },
      resetTextLighting(){
        if ( document.querySelector('.text-gradient') ) {
          document.querySelector('.text-gradient').style.backgroundImage='none';
          document.querySelector('.text-gradient').style.color='#fff';
        }

      },
    }
  }
</script>
