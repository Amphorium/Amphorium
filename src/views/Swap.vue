<template>

  <div class="swap-page">

    <LandingHeader/>

    <div class="side-menu" id="side-menu">
      <div class="social">
        <ul class="social__list">
          <li class="social__item">
            <a target="_blank" href="https://t.me/Amphorium">
              <img class="default" src="@/assets/img/social-1.svg" alt="">
              <img class="hover" src="@/assets/img/social-1-hover.svg" alt="">
              <img class="dark" src="@/assets/img/social-1-dark.svg" alt="">
            </a>
          </li>
          <li class="social__item">
            <a target="_blank" href="https://twitter.com/Amphorium_io">
              <img class="default" src="@/assets/img/social-2.svg" alt="">
              <img class="hover" src="@/assets/img/social-2-hover.svg" alt="">
              <img class="dark" src="@/assets/img/social-2-dark.svg" alt="">
            </a>
          </li>
          <li class="social__item">
            <a target="_blank" href="https://medium.com/amphorium"><img class="default" src="@/assets/img/social-3.svg" alt="">
              <img class="hover" src="@/assets/img/social-3-hover.svg" alt="">
              <img class="dark" src="@/assets/img/social-3-dark.svg" alt="">
            </a>
          </li>
          <li class="social__item">
            <a target="_blank" href="https://www.reddit.com/r/Amphorium/">
              <img class="default" src="@/assets/img/social-4.svg" alt="">
              <img class="hover" src="@/assets/img/social-4-hover.svg" alt="">
              <img class="dark" src="@/assets/img/social-4-dark.svg" alt="">
            </a>
          </li>
          <li class="social__item">
            <a target="_blank" href="https://discord.gg/CS2KCXTS6W">
              <img class="default" src="@/assets/img/social-5.svg" alt="">
              <img class="hover" src="@/assets/img/social-5-hover.svg" alt="">
              <img class="dark" src="@/assets/img/social-5-dark.svg" alt="">
            </a>
          </li>
        </ul>
      </div>
      <a href="#header" class="up-btn" v-smooth-scroll>
        <span>UP</span>
        <img class="default" src="@/assets/img/up-btn.svg" alt="">
        <img class="hover" src="@/assets/img/up-btn-hover.svg" alt="">
      </a>
    </div>

    <div class="container">
      <div class="swap-wrap">
        <div class="swap__head">
          <div class="title">BUY AMH</div>

<!--          <button class="settings-btn" @click="accountVisible = true">
            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.832031 14C0.832031 12.7746 0.987865 11.5874 1.2797 10.4527C2.06236 10.4938 2.84115 10.3177 3.52999 9.94389C4.21883 9.57006 4.79088 9.01303 5.18291 8.33438C5.57494 7.65574 5.77167 6.8819 5.75137 6.09843C5.73107 5.31495 5.49452 4.55234 5.06786 3.89491C6.78053 2.20988 8.89399 0.988613 11.2091 0.346161C11.5647 1.04525 12.1068 1.63231 12.7754 2.04235C13.4439 2.45239 14.213 2.66943 14.9973 2.66943C15.7816 2.66943 16.5506 2.45239 17.2192 2.04235C17.8878 1.63231 18.4299 1.04525 18.7854 0.346161C21.1006 0.988613 23.214 2.20988 24.9267 3.89491C24.4996 4.55246 24.2627 5.31536 24.2422 6.0992C24.2218 6.88303 24.4185 7.65724 24.8108 8.33618C25.2031 9.01511 25.7755 9.5723 26.4648 9.94608C27.154 10.3199 27.9333 10.4957 28.7163 10.4541C29.0081 11.5874 29.1639 12.7746 29.1639 14C29.1639 15.2254 29.0081 16.4126 28.7163 17.5473C27.9335 17.5059 27.1545 17.6818 26.4655 18.0555C25.7764 18.4292 25.2042 18.9862 24.812 19.6649C24.4197 20.3436 24.2229 21.1176 24.2431 21.9012C24.2634 22.6848 24.5 23.4475 24.9267 24.1051C23.214 25.7901 21.1006 27.0114 18.7854 27.6538C18.4299 26.9547 17.8878 26.3677 17.2192 25.9576C16.5506 25.5476 15.7816 25.3306 14.9973 25.3306C14.213 25.3306 13.4439 25.5476 12.7754 25.9576C12.1068 26.3677 11.5647 26.9547 11.2091 27.6538C8.89399 27.0114 6.78053 25.7901 5.06786 24.1051C5.495 23.4475 5.7319 22.6846 5.75235 21.9008C5.77281 21.117 5.57602 20.3427 5.18376 19.6638C4.79151 18.9849 4.21907 18.4277 3.5298 18.0539C2.84052 17.6801 2.06128 17.5043 1.27828 17.5459C0.987865 16.414 0.832031 15.2268 0.832031 14ZM7.6377 18.25C8.5302 19.7956 8.7852 21.5735 8.4367 23.2423C9.0147 23.6532 9.62953 24.0087 10.2741 24.3048C11.5727 23.1415 13.2552 22.4988 14.9987 22.5C16.7837 22.5 18.4525 23.1672 19.7233 24.3048C20.3679 24.0087 20.9827 23.6532 21.5607 23.2423C21.2029 21.5366 21.4874 19.7588 22.3597 18.25C23.2304 16.7404 24.6278 15.6053 26.2839 15.0625C26.3494 14.3557 26.3494 13.6443 26.2839 12.9375C24.6273 12.395 23.2293 11.2599 22.3583 9.75C21.486 8.24115 21.2015 6.46338 21.5593 4.75766C20.9814 4.34672 20.3663 3.99099 19.7219 3.69516C18.4236 4.85815 16.7417 5.50086 14.9987 5.49999C13.2552 5.50121 11.5727 4.85848 10.2741 3.69516C9.62971 3.991 9.01454 4.34673 8.4367 4.75766C8.7945 6.46338 8.50997 8.24115 7.6377 9.75C6.76697 11.2596 5.36959 12.3947 3.71353 12.9375C3.64801 13.6443 3.64801 14.3557 3.71353 15.0625C5.37012 15.605 6.76805 16.7401 7.63911 18.25H7.6377ZM14.9987 18.25C13.8715 18.25 12.7905 17.8022 11.9935 17.0052C11.1965 16.2082 10.7487 15.1272 10.7487 14C10.7487 12.8728 11.1965 11.7918 11.9935 10.9948C12.7905 10.1978 13.8715 9.75 14.9987 9.75C16.1259 9.75 17.2069 10.1978 18.0039 10.9948C18.8009 11.7918 19.2487 12.8728 19.2487 14C19.2487 15.1272 18.8009 16.2082 18.0039 17.0052C17.2069 17.8022 16.1259 18.25 14.9987 18.25ZM14.9987 15.4167C15.3744 15.4167 15.7348 15.2674 16.0004 15.0017C16.2661 14.7361 16.4154 14.3757 16.4154 14C16.4154 13.6243 16.2661 13.2639 16.0004 12.9983C15.7348 12.7326 15.3744 12.5833 14.9987 12.5833C14.623 12.5833 14.2626 12.7326 13.997 12.9983C13.7313 13.2639 13.582 13.6243 13.582 14C13.582 14.3757 13.7313 14.7361 13.997 15.0017C14.2626 15.2674 14.623 15.4167 14.9987 15.4167Z" fill="#747474"/>
            </svg>

          </button>-->
        </div>

        <div class="swap__coin">
          <div class="coin">
            <div class="coin__balance" >
              <div class="coin__type" @click="isOpenCoinSelect = !isOpenCoinSelect;">
                <div class="coin__icon">
                  <img :src="currentCoin.img" alt="">
                </div>

                {{currentCoin.name}}

                <div class="coin__drop-icon" :class="{active: isOpenCoinSelect}">
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.11362 10.7996L0.249512 2.48619L2.79514 0.078125L8.10678 5.69329L13.3869 0.0815468L15.9391 2.48277L8.11362 10.7996Z" fill="#FFFFFF"/>
                  </svg>

                </div>
              </div>

              <div class="coin__drop" v-show="isOpenCoinSelect" >
                <ul class="coin__drop-list">
                  <li v-for="(item, index) in coinMap" :key="index">
                    <div class="coin__type" @click="currentCoin = item;isOpenCoinSelect = false">
                      <div class="coin__icon ">
                        <img :src="item.img" alt="">
                      </div>
                      {{item.name}}
                    </div>

                  </li>

                </ul>
              </div>

              <span>Balance: {{currentCoin.name === 'BNB' ? (Number(getCurrentConnectionInfo.balance) / Math.pow(10, 18)).toFixed(8) : Number(coinBalance.toFixed(2))}} {{currentCoin.name}}</span>
            </div>

            <div class="coin__amount">
              <input type="number"
                     v-model="coinAmount"
                     @input="inputCoinAmount"
                     class="coin__input"
                     :placeholder="inputPlaceholder"
                     @focus="inputPlaceholder = ''"
              >
<!--              <span class="coin__trans">$ 0.997661</span>-->
            </div>
          </div>

          <div class="coin">
            <div class="coin__balance">
              <div class="coin__type">
                <div class="coin__icon amph-icon">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.24495 2.65263H8.75739L12 8.0807H0.00233895L3.24495 2.65263Z" fill="white"/>
                    <path d="M8.75739 14H3.24495L0.00233895 8.57193H12L8.75739 14Z" fill="white"/>
                    <path d="M3.24495 2.1614H8.75739L9.60047 0H2.40187L3.24495 2.1614Z" fill="white"/>
                    <path d="M10.9781 5.02698L9.5618 2.65257L11.9976 2.66242L10.9781 5.02698Z" fill="white"/>
                    <path d="M1.02211 5.03305L2.44192 2.6527L0 2.66257L1.02211 5.03305Z" fill="white"/>
                  </svg>


                </div>

                AMH
              </div>

              <span>Balance: {{Number(amhBalance.toFixed(8))}} AMH</span>
            </div>

            <div class="coin__amount">
              <input type="number"
                     v-model="amhAmount"
                     class="coin__input"
                     @input="inputAmhAmount"
                     :placeholder="inputPlaceholder"
                    @focus="inputPlaceholder = ''"
              >
<!--              <span class="coin__trans">$ 0.997661  <span class="coin__trans-green">(0.221%)</span></span>-->
            </div>
          </div>

          <div class="arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00066 12.172L14.3647 6.808L15.7787 8.222L8.00066 16L0.222656 8.222L1.63666 6.808L7.00066 12.172V0H9.00066V12.172Z" fill="#747474"/>
            </svg>

          </div>
        </div>

        <div class="swap-error" v-if="labelError">
          <div class="swap-error__icon">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9964 0C6.66849 0 3.14718 3.59265 3.14062 7.99332C3.14062 12.394 6.66194 15.9933 10.9833 16C15.3111 16.0067 18.839 12.4274 18.8521 8.02003C18.8652 3.60601 15.3308 0 10.9964 0ZM10.9898 14.3973C7.53407 14.3907 4.7144 11.5192 4.7144 8C4.7144 4.46745 7.54063 1.59599 11.0095 1.59599C14.4652 1.60267 17.2849 4.46745 17.2849 7.99332C17.2849 11.5259 14.4587 14.404 10.9898 14.3973Z" fill="#F67D75"/>
              <path d="M21.2052 3.83305C20.6806 2.50417 19.9331 1.3222 18.9626 0.287138C18.6282 -0.0734635 18.1561 -0.100175 17.8282 0.213682C17.5003 0.527538 17.4938 1.00166 17.8151 1.37562C17.8938 1.46911 17.979 1.55592 18.0642 1.65609C19.9724 3.91318 20.7265 6.5242 20.3134 9.46911C20.038 11.4324 19.1856 13.1352 17.8544 14.591C17.4938 14.985 17.4938 15.4658 17.8347 15.7863C18.1757 16.1068 18.6479 16.0668 19.0085 15.6728C20.9823 13.5092 21.9659 10.9449 22.0052 8.39398C21.9987 6.57762 21.7364 5.16861 21.2052 3.83305Z" fill="#F67D75"/>
              <path d="M3.94098 14.3506C1.94754 11.9867 1.21311 9.25544 1.74426 6.19701C2.06557 4.3673 2.89836 2.77798 4.14426 1.42239C4.50492 1.0284 4.51148 0.547595 4.17049 0.227061C3.82951 -0.106829 3.35082 -0.0600844 2.98361 0.347261C1.02295 2.49751 0.0393443 5.05511 0 7.57264C0 9.41571 0.262295 10.818 0.786885 12.1603C1.31148 13.4958 2.07213 14.6845 3.04262 15.7262C3.36393 16.0735 3.83607 16.0935 4.16393 15.7863C4.48525 15.4858 4.50492 14.9983 4.19672 14.6444C4.11803 14.5443 4.02623 14.4508 3.94098 14.3506Z" fill="#F67D75"/>
              <path d="M10.2178 8.71451C10.2178 9.24205 10.5456 9.60265 11.0112 9.60265C11.4637 9.59597 11.7915 9.24205 11.7915 8.72786C11.7915 7.17861 11.7915 5.62936 11.7915 4.08011C11.7915 3.56592 11.4637 3.212 11.0112 3.20532C10.5456 3.20532 10.2243 3.56592 10.2178 4.09347C10.2178 4.86142 10.2178 5.62936 10.2178 6.39063C10.2178 7.16526 10.2112 7.93988 10.2178 8.71451Z" fill="#F67D75"/>
              <path d="M11.0046 10.798C10.3554 10.798 9.81772 11.3456 9.82428 12.0067C9.83084 12.6611 10.3554 13.1953 10.998 13.1953C11.6472 13.1953 12.1849 12.6477 12.1784 11.9866C12.1718 11.3389 11.6472 10.8047 11.0046 10.798Z" fill="#F67D75"/>
            </svg>

          </div>

          <div class="swap-error__msg">
            {{ labelError }}
          </div>
        </div>

        <div class="swap__amount">1 AMH = {{pricePerAmh}} {{currentCoin.name}} </div>

        <div class="my-btn" @click="buyConfirmVisible = true">

          <span class="my-btn__content">BUY AMH</span>
        </div>
      </div>
    </div>

    <connect-wallet @close="connectWalletVisible = false;"
                    v-if="connectWalletVisible"/>
    <wait-confirm @close="waitConfirmVisible = false;"
                  :amh-amount="amhAmount"
                  :coin-amount="coinAmount"
                  :current-coin="currentCoin"
                  v-if="waitConfirmVisible"/>
    <buy-confirm @confirmed="buyTokens"
                 :amh-amount="amhAmount"
                 :current-coin="currentCoin"
                 :coin-amount="coinAmount"
                 @close="buyConfirmVisible = false;"
                 v-if="buyConfirmVisible"/>

    <error-modal v-if="error"
                 :message="error"
                  @close="error = null"/>
    <success-modal v-if="success"
                  :message="success"
                  @close="success = null"/>
    <LandingFooter/>
  </div>
</template>

<script>
  import ConnectWallet from "../components/Modals/ConnectWallet";
  import WaitConfirm from "../components/Modals/WaitConfirm";
  import BuyConfirm from "../components/Modals/BuyConfirm";
  import LandingHeader from "../components/landing/LandingHeader";
  import LandingFooter from "../components/landing/LandingFooter";
  import {mapGetters} from "vuex";
  import api from "../contract/api";
  import ErrorModal from "../components/Modals/ErrorModal";
  import SuccessModal from "../components/Modals/SuccessModal";
  export default {
    name: 'Swap',
    data: () => ({
      success: null,
      error: null,
      amhBalance: 0,
      coinBalance: 0,
      connectWalletVisible: false,
      waitConfirmVisible: false,
      buyConfirmVisible: false,
      accountVisible: false,
      coinAmount: null,
      amhAmount: null,
      isOpenCoinSelect: false,
      labelError: null,
      inputPlaceholder: '1',
      coinMap: [
        {
          img: require('@/assets/img/BNB.svg'),
          name: 'BNB',
          amhPerUnit: 30000,
          contract: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
          abiName: 'abiBnb'
        },
        {
          img: require('@/assets/img/USDT.svg'),
          name: 'USDT',
          amhPerUnit: 50,
          contract: '0x55d398326f99059ff775485246999027b3197955',
          abiName: 'abiUsdt'
        },
        {
          img: require('@/assets/img/USDC.svg'),
          name: 'USDC',
          amhPerUnit: 50,
          contract: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
          abiName: 'abiUsdc'
        },
        {
          img: require('@/assets/img/BUSD.svg'),
          name: 'BUSD',
          amhPerUnit: 50,
          contract: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
          abiName: 'abiBusd'
        },
        {
          img: require('@/assets/img/DAI.svg'),
          name: 'DAI',
          contract: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
          amhPerUnit: 50,
          abiName: 'abiDai'
        }
      ],
      currentCoin: {
        img: require('@/assets/img/BNB.svg'),
        name: 'BNB',
        amhPerUnit: 30000,
        contract: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
        abiName: 'abiBnb'
      },
    }),
    watch: {
      getAccount(val) {
        if(val) {
          this.initWeb3();
        }
      },
      async 'currentCoin.name'() {
        this.inputCoinAmount();
        await this.initWeb3();
      }
    },
    computed: {
      ...mapGetters({
        getCurrentConnectionInfo: 'wallet/getCurrentConnectionInfo',
        getAccount: 'wallet/getAccount'
      }),
      pricePerAmh() {
        return Number((1 / this.currentCoin.amhPerUnit).toFixed(8));
      }
    },
    methods: {
      inputCoinAmount() {
        this.amhAmount = Number((this.coinAmount * this.currentCoin.amhPerUnit).toFixed(8));
      },
      inputAmhAmount() {
        this.coinAmount = Number((this.amhAmount / this.currentCoin.amhPerUnit).toFixed(8));
      },
      async allowance() {
        try {
          return await api.allowance();
        } catch (e) {
          console.log(e);
        }
      },
      async balanceOfAmh() {
        try {
          this.amhBalance = await api.balanceOfAmh();
        } catch (e) {
          console.log(e)
        }
      },
      async balanceOfCoin() {
        try {
          if(this.currentCoin.name !== 'BNB') {
            this.coinBalance = await api.balanceOfCoin();
          }
        } catch (e) {
          console.log(e)
        }
      },
      async buyTokens() {
        if(this.amhAmount < 2500) {
          this.error = 'Min AMH amount is 2500';
          return;
        }
        try {
          this.buyConfirmVisible = false;
          this.waitConfirmVisible = true;
          await this.initWeb3();
          if(this.currentCoin.name !== 'BNB') {
            let allowance = await this.allowance();
            if(allowance === undefined || Number(this.coinAmount) > allowance) {
              await api.approve(this.coinAmount);
            }
          }
          if(this.currentCoin.name === 'BNB') {
            let available = await api.getAvailableBuyAmountByBnb()
            if(available >= Number(this.coinAmount)) {
              const converted = await api.convertAmhToBnb(this.amhAmount)
              await api.buyAmhTokenByBnb(converted);
            } else {
              this.waitConfirmVisible = false;
              this.labelError = 'Max amount for purchase 500 000 AMH'
            }
            this.success = 'Purchase completed';
            this.waitConfirmVisible = false;
          } else {
            let available = await api.getAvailableBuyAmountByTokens();
            if(available >= Number(this.coinAmount)) {
              const converted = await api.convertAmhToStableToken(this.amhAmount)
              await api.buyAmhTokenByToken(converted, this.currentCoin.contract);
            } else {
              this.labelError = 'Max amount for purchase 500 000 AMH'
            }
            this.success = 'Purchase completed';
            this.waitConfirmVisible = false;
          }
        } catch (e) {
          console.log(e.message);
          if(e.message.includes('err: insufficient funds for transfer:')) {
            this.error = 'Insufficient funds for transfer'
          } else {
            this.error = e.message;
          }
          this.waitConfirmVisible = false;
        }
      },
      async initWeb3() {
        try {
          api.initWeb3Methods(this.currentCoin.abiName, this.currentCoin.contract, this.getAccount);
          await this.balanceOfAmh();
          await this.balanceOfCoin();
        } catch (e) {
          console.log(e)
        }
      }
    },
    components: {SuccessModal, ErrorModal, BuyConfirm, WaitConfirm, ConnectWallet, LandingHeader, LandingFooter},
    mounted() {
      if(this.getAccount) {
        this.initWeb3()
      }
      document.body.addEventListener('click',(e)=>{
        if (!e.target.closest('.coin__type')){
          this.isOpenCoinSelect = false;
      }
      })
    }
  }
</script>
