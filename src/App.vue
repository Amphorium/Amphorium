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
        loading: true,
      }
    },
    created(){
    window.addEventListener("load", ()=> {
      
      if(performance.now()>5000){
        this.loading=false;
      }else {
        const timer = setInterval(() => {
          if (performance.now()>5000){
             this.loading=false;
            
             clearInterval(timer)
          }
        }, 100);
      }
      
    })
  }
  }
</script>

<style lang="scss">
  @import "assets/scss/style";
</style>