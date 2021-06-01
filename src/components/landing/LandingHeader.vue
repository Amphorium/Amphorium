<template>
<header class="header">
  <div class="container">
    <div class="header__wrap">
      <a class="logo" href=""><img src="@/assets/img/logo.svg" alt=""></a>
      <nav class="main-nav">
        <ul class="main-nav__list">
          <li class="main-nav__item">
            <a target="_blank" href="">
              Main
            </a>
          </li>
          <li class="main-nav__item">
            <a target="_blank" href="">
              Overview
            </a>
          </li>
          <li class="main-nav__item">
            <a target="_blank" href="">
              Technology
            </a>
          </li>
          <li class="main-nav__item">
            <a target="_blank" href="">
              Github
            </a>
          </li>
          <li class="main-nav__item">
            <a target="_blank" href="">
              Roadmap
            </a>
          </li>
          <li class="main-nav__item">
            <a target="_blank" href="">
              Tokenomics
            </a>
          </li>
          <li class="main-nav__item">
            <a target="_blank" href="">
              FAQ
            </a>
          </li>
          <li class="main-nav__item">
            <a target="_blank" href="">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
      <div class="header__btn">
        <button class="my-btn my-btn--border">Get access</button>
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
          <li><a href="#">About</a></li>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Technology</a></li>
          <li><a href="#">Technology</a></li>
          <li><a href="#">Roadmap</a></li>
          <li><a href="#">Tokenomics</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div class="mobile-menu__btn">
          <button class="my-btn my-btn--white"><span>Get access</span></button>
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
