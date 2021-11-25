<template>

  <div class="swap-page">
    <LandingHeader/>

    <div class="container">
      <div class="swap-wrap">
        <div class="swap__head">
          <div class="title">BUY AMH</div>

          <button class="settings-btn" @click="accountVisible = true">
            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.832031 14C0.832031 12.7746 0.987865 11.5874 1.2797 10.4527C2.06236 10.4938 2.84115 10.3177 3.52999 9.94389C4.21883 9.57006 4.79088 9.01303 5.18291 8.33438C5.57494 7.65574 5.77167 6.8819 5.75137 6.09843C5.73107 5.31495 5.49452 4.55234 5.06786 3.89491C6.78053 2.20988 8.89399 0.988613 11.2091 0.346161C11.5647 1.04525 12.1068 1.63231 12.7754 2.04235C13.4439 2.45239 14.213 2.66943 14.9973 2.66943C15.7816 2.66943 16.5506 2.45239 17.2192 2.04235C17.8878 1.63231 18.4299 1.04525 18.7854 0.346161C21.1006 0.988613 23.214 2.20988 24.9267 3.89491C24.4996 4.55246 24.2627 5.31536 24.2422 6.0992C24.2218 6.88303 24.4185 7.65724 24.8108 8.33618C25.2031 9.01511 25.7755 9.5723 26.4648 9.94608C27.154 10.3199 27.9333 10.4957 28.7163 10.4541C29.0081 11.5874 29.1639 12.7746 29.1639 14C29.1639 15.2254 29.0081 16.4126 28.7163 17.5473C27.9335 17.5059 27.1545 17.6818 26.4655 18.0555C25.7764 18.4292 25.2042 18.9862 24.812 19.6649C24.4197 20.3436 24.2229 21.1176 24.2431 21.9012C24.2634 22.6848 24.5 23.4475 24.9267 24.1051C23.214 25.7901 21.1006 27.0114 18.7854 27.6538C18.4299 26.9547 17.8878 26.3677 17.2192 25.9576C16.5506 25.5476 15.7816 25.3306 14.9973 25.3306C14.213 25.3306 13.4439 25.5476 12.7754 25.9576C12.1068 26.3677 11.5647 26.9547 11.2091 27.6538C8.89399 27.0114 6.78053 25.7901 5.06786 24.1051C5.495 23.4475 5.7319 22.6846 5.75235 21.9008C5.77281 21.117 5.57602 20.3427 5.18376 19.6638C4.79151 18.9849 4.21907 18.4277 3.5298 18.0539C2.84052 17.6801 2.06128 17.5043 1.27828 17.5459C0.987865 16.414 0.832031 15.2268 0.832031 14ZM7.6377 18.25C8.5302 19.7956 8.7852 21.5735 8.4367 23.2423C9.0147 23.6532 9.62953 24.0087 10.2741 24.3048C11.5727 23.1415 13.2552 22.4988 14.9987 22.5C16.7837 22.5 18.4525 23.1672 19.7233 24.3048C20.3679 24.0087 20.9827 23.6532 21.5607 23.2423C21.2029 21.5366 21.4874 19.7588 22.3597 18.25C23.2304 16.7404 24.6278 15.6053 26.2839 15.0625C26.3494 14.3557 26.3494 13.6443 26.2839 12.9375C24.6273 12.395 23.2293 11.2599 22.3583 9.75C21.486 8.24115 21.2015 6.46338 21.5593 4.75766C20.9814 4.34672 20.3663 3.99099 19.7219 3.69516C18.4236 4.85815 16.7417 5.50086 14.9987 5.49999C13.2552 5.50121 11.5727 4.85848 10.2741 3.69516C9.62971 3.991 9.01454 4.34673 8.4367 4.75766C8.7945 6.46338 8.50997 8.24115 7.6377 9.75C6.76697 11.2596 5.36959 12.3947 3.71353 12.9375C3.64801 13.6443 3.64801 14.3557 3.71353 15.0625C5.37012 15.605 6.76805 16.7401 7.63911 18.25H7.6377ZM14.9987 18.25C13.8715 18.25 12.7905 17.8022 11.9935 17.0052C11.1965 16.2082 10.7487 15.1272 10.7487 14C10.7487 12.8728 11.1965 11.7918 11.9935 10.9948C12.7905 10.1978 13.8715 9.75 14.9987 9.75C16.1259 9.75 17.2069 10.1978 18.0039 10.9948C18.8009 11.7918 19.2487 12.8728 19.2487 14C19.2487 15.1272 18.8009 16.2082 18.0039 17.0052C17.2069 17.8022 16.1259 18.25 14.9987 18.25ZM14.9987 15.4167C15.3744 15.4167 15.7348 15.2674 16.0004 15.0017C16.2661 14.7361 16.4154 14.3757 16.4154 14C16.4154 13.6243 16.2661 13.2639 16.0004 12.9983C15.7348 12.7326 15.3744 12.5833 14.9987 12.5833C14.623 12.5833 14.2626 12.7326 13.997 12.9983C13.7313 13.2639 13.582 13.6243 13.582 14C13.582 14.3757 13.7313 14.7361 13.997 15.0017C14.2626 15.2674 14.623 15.4167 14.9987 15.4167Z" fill="#747474"/>
            </svg>

          </button>
        </div>

        <div class="swap__coin">
          <div class="coin">
            <div class="coin__balance" >
              <div class="coin__type">
                <div class="coin__icon eth-icon">
                  <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15.5" r="15" fill="#F3BA2F"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.003 10.5697L11.5085 14.0642L9.47147 12.0315L15.003 6.5L20.5345 12.0358L18.5018 14.0685L15.003 10.5697ZM8.03561 13.4673L6.00293 15.5L8.03561 17.5327L10.0683 15.5L8.03561 13.4673ZM15.003 20.4304L11.5085 16.9359L9.46714 18.9642L9.47147 18.9686L15.003 24.5001L20.5388 18.9642L18.5018 16.9316L15.003 20.4304ZM21.966 13.4673L19.9333 15.5L21.966 17.5327L23.9987 15.5L21.966 13.4673ZM15.0026 13.437L17.0656 15.5L15.0026 17.5629L12.9397 15.5043L12.9375 15.5021L13.2986 15.141L13.4759 14.9637L15.0026 13.437ZM12.9375 15.5021L12.9353 15.5V15.5043L12.9375 15.5021Z" fill="white"/>
                  </svg>


                </div>

               BNB
              </div>

              <span>Balance: {{(Number(getCurrentConnectionInfo.balance) / Math.pow(10, 18)).toFixed(8)}} BNB</span>
            </div>

            <div class="coin__amount">
              <input type="number" v-model="ethCoin" class="coin__input" placeholder="0.000300317">
              <span class="coin__trans">$ 0.997661</span>
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

              <span>Balance: 0 AMH</span>
            </div>

            <div class="coin__amount">
              <input type="number" v-model="amhCoin" class="coin__input" placeholder="0.000300317">
              <span class="coin__trans">$ 0.997661  <span class="coin__trans-green">(0.221%)</span></span>
            </div>
          </div>

          <div class="arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00066 12.172L14.3647 6.808L15.7787 8.222L8.00066 16L0.222656 8.222L1.63666 6.808L7.00066 12.172V0H9.00066V12.172Z" fill="#747474"/>
            </svg>

          </div>
        </div>



        <div class="swap__amount">1 AMH = 0.0030003 BNB </div>

        <div class="my-btn" @click="buyConfirmVisible = true">

          <span class="my-btn__content">BUY AMH</span>
        </div>
      </div>
    </div>



    <connect-wallet @close="connectWalletVisible = false;" v-if="connectWalletVisible"></connect-wallet>
    <wait-confirm @close="waitConfirmVisible = false;" v-if="waitConfirmVisible"></wait-confirm>
    <buy-confirm @confirmed="buyTokens"
                 @close="buyConfirmVisible = false;" v-if="buyConfirmVisible"></buy-confirm>

  </div>
</template>

<script>
  import ConnectWallet from "../components/Modals/ConnectWallet";
  import WaitConfirm from "../components/Modals/WaitConfirm";
  import BuyConfirm from "../components/Modals/BuyConfirm";
  import LandingHeader from "../components/landing/LandingHeader";
  import {mapGetters} from "vuex";
  export default {
    name: 'Swap',
    data: () => ({
      connectWalletVisible: false,
      waitConfirmVisible: false,
      buyConfirmVisible: false,
      accountVisible: false,
      ethCoin: null,
      amhCoin: null
    }),
    computed: {
      ...mapGetters({
        getCurrentConnectionInfo: 'wallet/getCurrentConnectionInfo'
      })
    },
    methods: {
      buyTokens() {
        this.buyConfirmVisible = false;
        this.waitConfirmVisible = true;
      }
    },
    components: {BuyConfirm, WaitConfirm, ConnectWallet, LandingHeader}
  }
</script>
