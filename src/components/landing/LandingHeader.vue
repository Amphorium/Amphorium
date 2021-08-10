<template>
<header class="header" id="header">
  <div class="container">
    <div class="header__wrap">
      <a class="logo" href="#"><img src="@/assets/img/logo.svg" alt=""></a>
      <nav class="main-nav">
        <ul class="main-nav__list">
          <li class="main-nav__item">
            <a href="#about" v-smooth-scroll>
              About
            </a>
          </li>
          <li class="main-nav__item">
            <a href="#history" v-smooth-scroll>
              Overview
            </a>
          </li>
          <li class="main-nav__item">
            <a href="#facts" v-smooth-scroll>
              Technology
            </a>
          </li>
          <li class="main-nav__item">
            <a href="#roadmap" v-smooth-scroll>
              Roadmap
            </a>
          </li>
          <li class="main-nav__item">
            <a href="#tokenomics" v-smooth-scroll>
              Tokenomics
            </a>
          </li>
          <li class="main-nav__item">
            <a href="#news" v-smooth-scroll>
              News
            </a>
          </li>
          <li class="main-nav__item">
            <a href="#footer" v-smooth-scroll>
              Contacts
            </a>
          </li>
        </ul>
      </nav>
      <div class="header__btn">
        <a href="https://amphorium.io/docs/whitepaper" target="_blank" class="my-btn-border"><span>whitepaper</span></a>
      </div>
      <button class="burger-btn" @click="isOpenMobMenu=!isOpenMobMenu"></button>
      <div class="mobile-menu" :class="{active:isOpenMobMenu}">
        <div class="mobile-menu__wrap">
          <div class="mobile-menu__logo">
            <a class="logo" href=""><img src="@/assets/img/logo-white.svg" alt=""></a>
          </div>
          <div class="mobile-menu__close">
            <button class="close" @click="isOpenMobMenu=false"></button>
          </div>
        </div>
        <ul class="mobile-menu__list">
          <li><a href="#about" v-smooth-scroll>About</a></li>
          <li><a href="#history" v-smooth-scroll>Overview</a></li>
          <li><a href="#facts" v-smooth-scroll>Technology</a></li>
          <li><a href="#roadmap" v-smooth-scroll>Roadmap</a></li>
          <li><a href="#tokenomics" v-smooth-scroll>Tokenomics</a></li>
          <li><a href="#news" v-smooth-scroll>News</a></li>
          <li><a href="#footer" v-smooth-scroll>Contact</a></li>
        </ul>
        <div class="mobile-menu__btn">
          <a href="https://amphorium.io/docs/whitepaper" target="_blank" class="my-btn-border my-btn-border--white">
            <span>whitepaper</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</header>
</template>


<script>
  export default {
    name: 'LandingHeader',
    data(){
      return {
        isOpenMobMenu: false
      }
    },
    watch: {
      isOpenMobMenu(val){
        if (val===true){
          document.body.style.overflow='hidden';
        }else{
          document.body.style.overflow='auto';
        }
      }
    },
    mounted(){
      document.body.addEventListener('click', (e)=>{
        if ( (!!e.target.closest('.mobile-menu') && !e.target.closest('.mobile-menu__list a') && !e.target.closest('.mobile-menu button') ) ||
         e.target.closest('.burger-btn')) {
          return
        }
        this.isOpenMobMenu=false;
      })
    }
  }
</script>
<style lang="scss">
  .mobile-menu{
    max-height: 100vh;
    overflow: auto;
  }
</style> 
