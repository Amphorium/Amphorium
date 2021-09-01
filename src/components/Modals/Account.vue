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
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#3B99FC"/>
                  <path d="M5.86537 7.56785C8.14789 5.49701 11.8486 5.49701 14.1311 7.56785L14.4058 7.81708C14.5199 7.92063 14.5199 8.0885 14.4058 8.19204L13.4661 9.04461C13.409 9.09638 13.3165 9.09638 13.2595 9.04461L12.8814 8.70164C11.2891 7.25697 8.70739 7.25697 7.11505 8.70164L6.71021 9.06893C6.65315 9.1207 6.56063 9.1207 6.50357 9.06893L5.56385 8.21636C5.44973 8.11282 5.44973 7.94495 5.56385 7.84141L5.86537 7.56785ZM16.0745 9.33104L16.9109 10.0898C17.025 10.1934 17.025 10.3612 16.9109 10.4648L13.1397 13.8862C13.0256 13.9898 12.8406 13.9898 12.7264 13.8862C12.7264 13.8862 12.7264 13.8862 12.7264 13.8862L10.0499 11.4579C10.0214 11.4321 9.97513 11.4321 9.9466 11.4579C9.9466 11.4579 9.9466 11.4579 9.9466 11.4579L7.27013 13.8862C7.15601 13.9898 6.97097 13.9898 6.85684 13.8862C6.85684 13.8862 6.85684 13.8862 6.85684 13.8862L3.08559 10.4647C2.97147 10.3612 2.97147 10.1933 3.08559 10.0898L3.92194 9.331C4.03607 9.22746 4.2211 9.22746 4.33523 9.331L7.0118 11.7593C7.04033 11.7852 7.08659 11.7852 7.11512 11.7593C7.11512 11.7593 7.11512 11.7593 7.11512 11.7593L9.79155 9.331C9.90567 9.22746 10.0907 9.22745 10.2048 9.33099C10.2048 9.33099 10.2048 9.33099 10.2048 9.331L12.8814 11.7593C12.9099 11.7852 12.9562 11.7852 12.9847 11.7593L15.6612 9.33104C15.7754 9.2275 15.9604 9.2275 16.0745 9.33104Z" fill="white"/>
                </svg>

                {{getCurrentConnectionInfo.account | cutHash}}
              </div>

              <div class="wrap__btns">
                <button class="copy-btn" @click="doCopy">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.25 3.5V1.25C3.25 1.05109 3.32902 0.860322 3.46967 0.71967C3.61032 0.579018 3.80109 0.5 4 0.5H13C13.1989 0.5 13.3897 0.579018 13.5303 0.71967C13.671 0.860322 13.75 1.05109 13.75 1.25V11.75C13.75 11.9489 13.671 12.1397 13.5303 12.2803C13.3897 12.421 13.1989 12.5 13 12.5H10.75V14.75C10.75 15.164 10.4125 15.5 9.99475 15.5H1.00525C0.906345 15.5006 0.808298 15.4816 0.716742 15.4442C0.625186 15.4068 0.541925 15.3517 0.471744 15.282C0.401563 15.2123 0.345845 15.1294 0.307791 15.0381C0.269737 14.9468 0.250097 14.8489 0.25 14.75L0.25225 4.25C0.25225 3.836 0.58975 3.5 1.00675 3.5H3.25ZM1.7515 5L1.75 14H9.25V5H1.7515ZM4.75 3.5H10.75V11H12.25V2H4.75V3.5ZM3.25 7.25H7.75V8.75H3.25V7.25ZM3.25 10.25H7.75V11.75H3.25V10.25Z" fill="#747474"/>
                  </svg>

                  {{copied ? 'Copied' : 'Copy Address'}}
                </button>

                <a class="view-btn" target="_blank" :href="`https://etherscan.io/address/${this.getCurrentConnectionInfo.account}`">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.9395 2L0.48425 8.45525L1.54475 9.51575L8 3.0605V8.75H9.5V0.5H1.25V2H6.9395Z" fill="#747474"/>
                  </svg>
                  View on Explorer
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
