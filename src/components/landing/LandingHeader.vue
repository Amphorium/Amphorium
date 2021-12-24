<template>
<header class="header" id="header">
  <account @close="accountVisible = false;" v-if="accountVisible"></account>
  <div class="container">
    <div class="header__wrap">
      <router-link class="logo" to="/"><img src="@/assets/img/logo.svg" alt="logo"></router-link>
      <nav class="main-nav">
        <ul v-if="$route.name==='Landing'" class="main-nav__list">
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
        <ul v-if="$route.name!=='Landing' " class="main-nav__list">
          <li class="main-nav__item">
            <router-link :to="'/'">
              About
            </router-link>
          </li>
          <li class="main-nav__item">
            <router-link :to="'/'">
              Overview
            </router-link>
          </li>
          <li class="main-nav__item">
            <router-link :to="'/'">
              Technology
            </router-link>
          </li>
          <li class="main-nav__item">
            <router-link :to="'/'">
              Roadmap
            </router-link>
          </li>
          <li class="main-nav__item">
            <router-link :to="'/'">
              Tokenomics
            </router-link>
          </li>
          <li class="main-nav__item">
            <router-link :to="'/'">
              News
            </router-link>
          </li>
          <li class="main-nav__item">
            <router-link :to="'/'">
              Contacts
            </router-link>
          </li>
        </ul>
      </nav>
      <div  class="header__btn">
        <a v-if="$route.name!=='Swap'" href="https://amphorium.io/docs/whitepaper" target="_blank" class="my-btn-border"><span>whitepaper</span></a>

        <router-link v-if="$route.name==='Landing' && getBtnVisible" tag="button" to="/sale" class="my-btn">
          <span class="my-btn__content">buy amh</span>
        </router-link>
        <a v-if="$route.name==='Landing' && !getBtnVisible" href="#timer" v-smooth-scroll class="my-btn">
          <span class="my-btn__content">buy amh</span>
        </a>
      </div>
      <div class="header__btn" >
        <button style="width: 185px" @click="setConnectWalletModalVisible(true)" v-if="$route.name==='Swap' && !getCurrentConnectionInfo.walletName" class="my-btn-border" >
          <span>Connect wallet</span>
        </button>
      </div>
      <div v-if="$route.name==='Swap' && getCurrentConnectionInfo.walletName" class="header__account account">
        <div class="account__amount">
          {{(Number(getCurrentConnectionInfo.balance) / Math.pow(10, 18)).toFixed(8)}} BNB
        </div>
        <div class="account__id" @click="accountVisible = true">
          {{getCurrentConnectionInfo.account | cutHash}}
        </div>
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
          <a href="https://amphorium.io/docs/whitepaper" target="_blank" class="my-btn-border ">
            <span>whitepaper</span>
          </a>

          <router-link v-if="$route.name==='Landing' && getBtnVisible" tag="button" to="/sale" class="my-btn mb-3" style="height: 60px">
            <span class="my-btn__content" >buy amh</span>
          </router-link>
          <a v-if="$route.name==='Landing' && !getBtnVisible" href="#timer" v-smooth-scroll class="my-btn mb-3" style="height: 60px; width: 100%">
            <span class="my-btn__content">buy amh</span>
          </a>

          <button @click="setConnectWalletModalVisible(true)" v-if="$route.name==='Swap' && !getCurrentConnectionInfo.walletName" class="my-btn-border my-btn-border--white">
            <span>connect wallet</span>
          </button>

          <div v-if="getCurrentConnectionInfo.walletName" class="account">
            <div class="account__amount">
              {{(Number(getCurrentConnectionInfo.balance) / Math.pow(10, 18)).toFixed(8)}} BNB
            </div>
            <div class="account__id" @click="isOpenMobMenu = false;accountVisible = true">
              {{getCurrentConnectionInfo.account | cutHash}}
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</header>
</template>


<script>
import Account from "@/components/Modals/Account";
import {mapGetters, mapMutations} from "vuex";

  export default {
    name: 'LandingHeader',
    data(){
      return {
        accountVisible: false,
        isOpenMobMenu: false,
        isConnect: false,
        isConnected: false
      }
    },
    computed: {
      ...mapGetters({
        getCurrentConnectionInfo: 'wallet/getCurrentConnectionInfo',
        getBtnVisible: 'general/getBtnVisible'
      })
    },
    filters: {
      cutHash(val){
        let valLength = val.length,
            valStart = val.substring(0, 6),
            valEnd = val.substring(valLength-5, valLength);
        return `${valStart}...${valEnd}`
      }
    },
    methods: {
      ...mapMutations({
        setConnectWalletModalVisible: 'wallet/setConnectWalletModalVisible'
      })
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
    },
    components: {
      Account
    }
  }
</script>
<style lang="scss">
  .mobile-menu{
    max-height: 100vh;
    overflow: auto;
  }
</style>
