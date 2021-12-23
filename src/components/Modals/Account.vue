<template>
  <div class="popup-container">
    <div class="popup-bg"></div>
    <div class="popup-slide">
      <div class="popup popup-connect popup-account">
        <button @click="close" class="popup__close"></button>
        <div class="popup__content">
          <div class="popup-connect__title">
            Account
          </div>
          <connect-wallet
              @close="connectWalletVisible = false"
              v-if="connectWalletVisible"></connect-wallet>
          <div class="popup-connect__wrap">
            <div class="wrap-col">
                <div class="wrap__title">
                  Connected with {{getCurrentConnectionInfo.walletName === 'metamask' ? 'MetaMask' : 'Wallet Connect'}}
                </div>

              <div class="wrap__id">
                {{getCurrentConnectionInfo.account | cutHash}}
              </div>

              <div class="wrap__btns">
                <button class="copy-btn" @click="doCopy">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.25 3.5V1.25C3.25 1.05109 3.32902 0.860322 3.46967 0.71967C3.61032 0.579018 3.80109 0.5 4 0.5H13C13.1989 0.5 13.3897 0.579018 13.5303 0.71967C13.671 0.860322 13.75 1.05109 13.75 1.25V11.75C13.75 11.9489 13.671 12.1397 13.5303 12.2803C13.3897 12.421 13.1989 12.5 13 12.5H10.75V14.75C10.75 15.164 10.4125 15.5 9.99475 15.5H1.00525C0.906345 15.5006 0.808298 15.4816 0.716742 15.4442C0.625186 15.4068 0.541925 15.3517 0.471744 15.282C0.401563 15.2123 0.345845 15.1294 0.307791 15.0381C0.269737 14.9468 0.250097 14.8489 0.25 14.75L0.25225 4.25C0.25225 3.836 0.58975 3.5 1.00675 3.5H3.25ZM1.7515 5L1.75 14H9.25V5H1.7515ZM4.75 3.5H10.75V11H12.25V2H4.75V3.5ZM3.25 7.25H7.75V8.75H3.25V7.25ZM3.25 10.25H7.75V11.75H3.25V10.25Z" fill="#747474"/>
                  </svg>

                  {{copied ? 'Copied' : 'Copy Address'}}
                </button>

                <a class="view-btn" target="_blank" :href="`https://bscscan.com/address/${this.getCurrentConnectionInfo.account}`">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.9395 2L0.48425 8.45525L1.54475 9.51575L8 3.0605V8.75H9.5V0.5H1.25V2H6.9395Z" fill="#747474"/>
                  </svg>
                  View on BscScan
                </a>
              </div>
            </div>

            <div class="wrap-col">
              <button class="change-btn" @click="connectWalletVisible = true">Change</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import ConnectWallet from "@/components/Modals/ConnectWallet";

  export default {
    name: 'Account',
    components: {ConnectWallet},
    data: () => ({
      connectWalletVisible: false,
      copied: false
    }),
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
      doCopy: function () {
        this.$copyText(this.getCurrentConnectionInfo.account).then(() => {
          this.copied = true;
          setTimeout(() => this.copied = false, 2000)
        }, () => {
          this.copied = false;
        })
      },
      close() {
        this.$emit('close')
      }
    }
  }
</script>
