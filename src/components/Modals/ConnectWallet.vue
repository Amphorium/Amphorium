<template>
  <div class="popup-container">
    <div class="popup-bg"></div>
    <div class="popup-slide">
      <div class="popup popup-connect">
        <button @click="close" class="popup__close"></button>
        <div class="popup__content">
          <error-modal v-if="error" :message="error" @close="error = null"></error-modal>
          <div class="popup-connect__title">
            Connect your wallet
          </div>
         <div class="popup-connect__text">
           By connecting your wallet, you agree to our
           <a href="https://amphorium.io/docs/terms_conditions/" target="_blank" class="link">Terms of Service </a> and
           <a href="https://amphorium.io/docs/privacy_policy/" target="_blank" class="link">Privacy Policy</a>
         </div>

          <div class="popup-connect__btns">
            <button class="connect-btn metamask" @click="connect('metamask')">
              <svg width="49" height="45" viewBox="0 0 49 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.4852 4.86475L26.8125 15.8867L29.541 9.3911L41.4852 4.86475Z" fill="#E17726" stroke="#E17726" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.64062 4.86475L22.1827 15.9896L19.5849 9.3911L7.64062 4.86475Z" fill="#E27625" stroke="#E27625" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M36.2009 30.4209L32.2969 36.4756L40.6564 38.8123L43.0511 30.5532L36.2009 30.4209Z" fill="#E27625" stroke="#E27625" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.08594 30.5532L8.46609 38.8123L16.8111 36.4756L12.9216 30.4209L6.08594 30.5532Z" fill="#E27625" stroke="#E27625" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.3612 20.1925L14.0391 23.7489L22.3115 24.131L22.0358 15.093L16.3612 20.1925Z" fill="#E27625" stroke="#E27625" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M32.7629 20.1926L27.0012 14.9902L26.8125 24.1311L35.085 23.749L32.7629 20.1926Z" fill="#E27625" stroke="#E27625" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.8125 36.4757L21.8195 34.0215L17.5091 30.6121L16.8125 36.4757Z" fill="#E27625" stroke="#E27625" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M27.3047 34.0215L32.2972 36.4757L31.6151 30.6121L27.3047 34.0215Z" fill="#E27625" stroke="#E27625" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M32.2972 36.4757L27.3047 34.0215L27.7111 37.3134L27.6675 38.7095L32.2972 36.4757Z" fill="#D5BFB2" stroke="#D5BFB2" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.8125 36.4757L21.4567 38.7095L21.4277 37.3134L21.8195 34.0215L16.8125 36.4757Z" fill="#D5BFB2" stroke="#D5BFB2" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.5414 28.4371L17.3906 27.2027L20.3223 25.8359L21.5414 28.4371Z" fill="#233447" stroke="#233447" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M27.5781 28.4371L28.7972 25.8359L31.7434 27.2027L27.5781 28.4371Z" fill="#233447" stroke="#233447" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.8114 36.4756L17.537 30.4209L12.9219 30.5532L16.8114 36.4756Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M31.5859 30.4209L32.2971 36.4756L36.2011 30.5532L31.5859 30.4209Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M35.085 23.749L26.8125 24.1311L27.5817 28.437L28.8008 25.8358L31.747 27.2026L35.085 23.749Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.3916 27.2026L20.3232 25.8358L21.5423 28.437L22.3115 24.1311L14.0391 23.749L17.3916 27.2026Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.0391 23.749L17.5077 30.612L17.3916 27.2026L14.0391 23.749Z" fill="#E27525" stroke="#E27525" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M31.7439 27.2026L31.6133 30.612L35.0819 23.749L31.7439 27.2026Z" fill="#E27525" stroke="#E27525" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.3122 24.1311L21.543 28.437L22.5153 33.5218L22.733 26.8205L22.3122 24.1311Z" fill="#E27525" stroke="#E27525" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.8087 24.1311L26.4023 26.8058L26.6055 33.5218L27.5779 28.437L26.8087 24.1311Z" fill="#E27525" stroke="#E27525" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M27.5818 28.4371L26.6094 33.5219L27.306 34.0216L31.6164 30.6121L31.747 27.2026L27.5818 28.4371Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.3906 27.2026L17.5067 30.6121L21.8171 34.0216L22.5137 33.5219L21.5414 28.4371L17.3906 27.2026Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M27.6683 38.7096L27.7118 37.3135L27.3345 36.9902H21.7905L21.4277 37.3135L21.4567 38.7096L16.8125 36.4758L18.438 37.8279L21.7324 40.1351H27.378L30.687 37.8279L32.298 36.4758L27.6683 38.7096Z" fill="#C0AC9D" stroke="#C0AC9D" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M27.3036 34.0214L26.607 33.5217H22.5143L21.8176 34.0214L21.4258 37.3133L21.7886 36.99H27.3326L27.71 37.3133L27.3036 34.0214Z" fill="#161616" stroke="#161616" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M42.1081 16.6068L43.3417 10.5227L41.484 4.86475L27.3047 15.5193L32.7616 20.1926L40.4681 22.4705L42.1661 20.4571L41.4259 19.9134L42.6015 18.8259L41.7017 18.1205L42.8772 17.2093L42.1081 16.6068Z" fill="#763E1A" stroke="#763E1A" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.78125 10.5227L7.02938 16.6068L6.23116 17.2093L7.42123 18.1205L6.52142 18.8259L7.69698 19.9134L6.95681 20.4571L8.65484 22.4705L16.3613 20.1926L21.8182 15.5193L7.63893 4.86475L5.78125 10.5227Z" fill="#763E1A" stroke="#763E1A" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M40.4663 22.4705L32.7598 20.1926L35.0819 23.749L31.6133 30.6121L36.1994 30.5533H43.0496L40.4663 22.4705Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.3612 20.1926L8.65476 22.4705L6.08594 30.5533H12.9216L17.5077 30.6121L14.0391 23.749L16.3612 20.1926Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.8096 24.1311L27.303 15.5193L29.538 9.39111H19.582L21.817 15.5193L22.3105 24.1311L22.4992 26.8352L22.5137 33.5219H26.6064L26.6209 26.8352L26.8096 24.1311Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Metamask
            </button>

            <button class="connect-btn walletConnect" @click="connect('walletConnect')">
              <svg width="48" height="29" viewBox="0 0 48 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3316 5.68356C18.0544 -1.82323 30.5756 -1.82323 38.2984 5.68356L39.2278 6.58702C39.614 6.96236 39.614 7.5709 39.2278 7.94624L36.0484 11.0368C35.8553 11.2245 35.5423 11.2245 35.3492 11.0368L34.0702 9.79352C28.6825 4.55659 19.9474 4.55659 14.5598 9.79352L13.1901 11.125C12.997 11.3126 12.684 11.3126 12.4909 11.125L9.31141 8.03441C8.92527 7.65907 8.92527 7.05053 9.31141 6.67519L10.3316 5.68356ZM44.8739 12.0751L47.7036 14.8257C48.0897 15.2011 48.0897 15.8096 47.7036 16.1849L34.9441 28.5877C34.558 28.9631 33.9319 28.9631 33.5458 28.5877C33.5458 28.5877 33.5458 28.5877 33.5458 28.5877L24.4898 19.7851C24.3933 19.6913 24.2368 19.6913 24.1403 19.7851C24.1403 19.7851 24.1402 19.7851 24.1402 19.7851L15.0845 28.5877C14.6984 28.9631 14.0723 28.9631 13.6862 28.5877C13.6862 28.5877 13.6862 28.5877 13.6862 28.5877L0.926325 16.1848C0.540183 15.8094 0.540183 15.2009 0.926325 14.8256L3.75607 12.075C4.14221 11.6996 4.76827 11.6996 5.15441 12.075L14.2105 20.8777C14.307 20.9715 14.4635 20.9715 14.56 20.8777C14.56 20.8777 14.56 20.8777 14.56 20.8777L23.6156 12.075C24.0018 11.6996 24.6278 11.6996 25.014 12.0749C25.014 12.0749 25.014 12.0749 25.014 12.075L34.07 20.8777C34.1666 20.9715 34.3231 20.9715 34.4196 20.8777L43.4755 12.0751C43.8617 11.6998 44.4877 11.6998 44.8739 12.0751Z" fill="white"/>
              </svg>

              WalletConnect
            </button>

            <button class="connect-btn trustWallet" @click="connect('trustWallet')">
              <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.2184 1H16.7803C8.06509 1 1 8.06509 1 16.7803V32.2184C1 40.9336 8.06509 47.9987 16.7803 47.9987H32.2184C40.9336 47.9987 47.9987 40.9336 47.9987 32.2184V16.7803C47.9987 8.06509 40.9336 1 32.2184 1Z" fill="white" stroke="#DFE5EC"/>
                <path d="M2.79297 24.8387C2.79297 12.7776 12.5703 3.00049 24.6311 3.00049C36.6921 3.00049 46.4695 12.7776 46.4695 24.8387C46.4695 36.8998 36.6921 46.6771 24.6311 46.6771C12.5703 46.6771 2.79297 36.8998 2.79297 24.8387Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6906 10.641C24.2446 10.1783 25.0503 10.1783 25.6043 10.641C29.3647 13.7817 33.653 13.7578 35.3226 13.7484C35.4056 13.748 35.4822 13.7476 35.5519 13.7476C35.9516 13.7476 36.3347 13.9079 36.6153 14.1927C36.8958 14.4776 37.0504 14.863 37.0444 15.2627C36.9653 20.5078 36.7551 24.2562 36.3416 27.0063C35.9284 29.7546 35.293 31.6513 34.2612 33.0853C33.2216 34.53 31.8861 35.3482 30.4806 36.1249C30.2366 36.2598 29.988 36.3946 29.7338 36.5325C28.5018 37.2008 27.1379 37.9406 25.5175 39.103C24.9974 39.4761 24.2974 39.4761 23.7774 39.103C22.1586 37.9418 20.7965 37.2023 19.5664 36.5345C19.311 36.3958 19.0613 36.2602 18.8161 36.1246C17.4118 35.3477 16.0781 34.5292 15.0405 33.084C14.011 31.6499 13.3779 29.7532 12.9662 27.0055C12.5542 24.2558 12.3449 20.5076 12.2658 15.2628C12.2598 14.863 12.4143 14.4776 12.6949 14.1927C12.9754 13.9079 13.3585 13.7476 13.7583 13.7476C13.8272 13.7476 13.903 13.748 13.9853 13.7484C15.6415 13.7578 19.93 13.7819 23.6906 10.641ZM24.6475 13.6714C21.1388 16.1731 17.4312 16.6406 15.2781 16.7208C15.3725 21.1377 15.5754 24.2726 15.9186 26.5632C16.2998 29.1076 16.8351 30.4647 17.4657 31.343C18.0882 32.2101 18.9062 32.7627 20.2613 33.5123C20.4814 33.6341 20.7139 33.7602 20.9582 33.8927C21.9885 34.4513 23.2299 35.1245 24.6475 36.074C26.0671 35.1232 27.3105 34.4496 28.3425 33.8904C28.5858 33.7586 28.8173 33.6332 29.0367 33.512C30.3936 32.7621 31.2136 32.2093 31.8379 31.3417C32.47 30.4632 33.0069 29.1063 33.3894 26.5624C33.7338 24.2722 33.9375 21.1377 34.0321 16.7212C31.8738 16.6417 28.1606 16.1762 24.6475 13.6714Z" fill="#3375BB"/>
              </svg>

              TrustWallet
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from "vuex";
  import ErrorModal from "@/components/Modals/ErrorModal";

  export default {
    name: 'ConnectWallet',
    components: {ErrorModal},
    data: () => ({
      error: null
    }),
    methods: {
      ...mapActions({
        connectWallet: 'wallet/connectWallet'
      }),
      async connect(wallet) {
        try {
          await this.connectWallet(wallet);
          this.close();
        } catch (e) {
          console.log(e.message)
          this.error = e.message;
        }
      },
      close() {
        this.$emit('close')
      }
    }
  }
</script>
