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

<!--        <router-link v-if="$route.name==='Landing'" tag="button" to="/swap" class="my-btn" >-->
<!--          <span class="my-btn__content">buy amh</span>-->
<!--        </router-link>-->
      </div>
      <div class="header__btn">
<!--        <button @click="setConnectWalletModalVisible(true)" v-if="$route.name==='Swap' && !getCurrentConnectionInfo.walletName" class="my-btn" >-->
<!--          <span class="my-btn__content">buy amh</span>-->
<!--        </button>-->
      </div>
      <div v-if="$route.name==='Swap' && getCurrentConnectionInfo.walletName" class="header__account account">
        <div class="account__amount">
          {{(Number(getCurrentConnectionInfo.balance) / Math.pow(10, 18)).toFixed(8)}} ETH
        </div>
        <div class="account__id" @click="accountVisible = true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#3B99FC"/>
            <path d="M5.86537 7.56785C8.14789 5.49701 11.8486 5.49701 14.1311 7.56785L14.4058 7.81708C14.5199 7.92063 14.5199 8.0885 14.4058 8.19204L13.4661 9.04461C13.409 9.09638 13.3165 9.09638 13.2595 9.04461L12.8814 8.70164C11.2891 7.25697 8.70739 7.25697 7.11505 8.70164L6.71021 9.06893C6.65315 9.1207 6.56063 9.1207 6.50357 9.06893L5.56385 8.21636C5.44973 8.11282 5.44973 7.94495 5.56385 7.84141L5.86537 7.56785ZM16.0745 9.33104L16.9109 10.0898C17.025 10.1934 17.025 10.3612 16.9109 10.4648L13.1397 13.8862C13.0256 13.9898 12.8406 13.9898 12.7264 13.8862C12.7264 13.8862 12.7264 13.8862 12.7264 13.8862L10.0499 11.4579C10.0214 11.4321 9.97513 11.4321 9.9466 11.4579C9.9466 11.4579 9.9466 11.4579 9.9466 11.4579L7.27013 13.8862C7.15601 13.9898 6.97097 13.9898 6.85684 13.8862C6.85684 13.8862 6.85684 13.8862 6.85684 13.8862L3.08559 10.4647C2.97147 10.3612 2.97147 10.1933 3.08559 10.0898L3.92194 9.331C4.03607 9.22746 4.2211 9.22746 4.33523 9.331L7.0118 11.7593C7.04033 11.7852 7.08659 11.7852 7.11512 11.7593C7.11512 11.7593 7.11512 11.7593 7.11512 11.7593L9.79155 9.331C9.90567 9.22746 10.0907 9.22745 10.2048 9.33099C10.2048 9.33099 10.2048 9.33099 10.2048 9.331L12.8814 11.7593C12.9099 11.7852 12.9562 11.7852 12.9847 11.7593L15.6612 9.33104C15.7754 9.2275 15.9604 9.2275 16.0745 9.33104Z" fill="white"/>
          </svg>
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

<!--          <button v-if="!getCurrentConnectionInfo.walletName" class="my-btn-border my-btn-border&#45;&#45;white">-->
<!--            <span>buy amh</span>-->
<!--          </button>-->

          <div v-if="getCurrentConnectionInfo.walletName" class="account">
            <div class="account__amount">
              {{(Number(getCurrentConnectionInfo.balance) / Math.pow(10, 18)).toFixed(8)}} ETH
            </div>
            <div class="account__id" @click="isOpenMobMenu = false;accountVisible = true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#3B99FC"/>
                <path d="M5.86537 7.56785C8.14789 5.49701 11.8486 5.49701 14.1311 7.56785L14.4058 7.81708C14.5199 7.92063 14.5199 8.0885 14.4058 8.19204L13.4661 9.04461C13.409 9.09638 13.3165 9.09638 13.2595 9.04461L12.8814 8.70164C11.2891 7.25697 8.70739 7.25697 7.11505 8.70164L6.71021 9.06893C6.65315 9.1207 6.56063 9.1207 6.50357 9.06893L5.56385 8.21636C5.44973 8.11282 5.44973 7.94495 5.56385 7.84141L5.86537 7.56785ZM16.0745 9.33104L16.9109 10.0898C17.025 10.1934 17.025 10.3612 16.9109 10.4648L13.1397 13.8862C13.0256 13.9898 12.8406 13.9898 12.7264 13.8862C12.7264 13.8862 12.7264 13.8862 12.7264 13.8862L10.0499 11.4579C10.0214 11.4321 9.97513 11.4321 9.9466 11.4579C9.9466 11.4579 9.9466 11.4579 9.9466 11.4579L7.27013 13.8862C7.15601 13.9898 6.97097 13.9898 6.85684 13.8862C6.85684 13.8862 6.85684 13.8862 6.85684 13.8862L3.08559 10.4647C2.97147 10.3612 2.97147 10.1933 3.08559 10.0898L3.92194 9.331C4.03607 9.22746 4.2211 9.22746 4.33523 9.331L7.0118 11.7593C7.04033 11.7852 7.08659 11.7852 7.11512 11.7593C7.11512 11.7593 7.11512 11.7593 7.11512 11.7593L9.79155 9.331C9.90567 9.22746 10.0907 9.22745 10.2048 9.33099C10.2048 9.33099 10.2048 9.33099 10.2048 9.331L12.8814 11.7593C12.9099 11.7852 12.9562 11.7852 12.9847 11.7593L15.6612 9.33104C15.7754 9.2275 15.9604 9.2275 16.0745 9.33104Z" fill="white"/>
              </svg>
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
        getCurrentConnectionInfo: 'wallet/getCurrentConnectionInfo'
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
