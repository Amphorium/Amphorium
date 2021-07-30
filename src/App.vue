<template>
  <div id="app">
     <Preloader v-if="loading"/>
    <router-view/>
  </div>
</template>


<script>
import Preloader from "@/components/preloader";

  export default {
    name: "App",
    components: {
       Preloader,
    },
    data(){
      return {
        loading: false,
      }
    },
    created(){
    // window.addEventListener("load", ()=> {
      
    //   setTimeout(() => {
    //     this.loading=false
        
    //   }, 500);

    // })
  }
  }
</script>

<style lang="scss">
  @import "assets/scss/style";
</style>