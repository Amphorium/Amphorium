<template>
  <div class="popup-container">
    <div class="popup-bg"></div>
    <div class="popup-slide">
      <div class="popup popup-connect popup-confirm">
        <button @click="close" class="popup__close"></button>
        <div class="popup__content">
          <div class="popup-connect__title">
            Confirm Buy
          </div>

          <div class="swap__coin">
            <div class="coin">
              <div class="coin__balance">
               <span>From</span>
                <div class="coin__type">

                  <div class="coin__icon eth-icon">
<!--                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                      <circle cx="15" cy="15.5" r="15" fill="#F3BA2F"/>-->
<!--                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.003 10.5697L11.5085 14.0642L9.47147 12.0315L15.003 6.5L20.5345 12.0358L18.5018 14.0685L15.003 10.5697ZM8.03561 13.4673L6.00293 15.5L8.03561 17.5327L10.0683 15.5L8.03561 13.4673ZM15.003 20.4304L11.5085 16.9359L9.46714 18.9642L9.47147 18.9686L15.003 24.5001L20.5388 18.9642L18.5018 16.9316L15.003 20.4304ZM21.966 13.4673L19.9333 15.5L21.966 17.5327L23.9987 15.5L21.966 13.4673ZM15.0026 13.437L17.0656 15.5L15.0026 17.5629L12.9397 15.5043L12.9375 15.5021L13.2986 15.141L13.4759 14.9637L15.0026 13.437ZM12.9375 15.5021L12.9353 15.5V15.5043L12.9375 15.5021Z" fill="white"/>-->
<!--                    </svg>-->
                    <img :src="currentCoin.img" alt="">

                  </div>

                 {{currentCoin.name}}
                </div>

              </div>

              <div class="coin__amount">
<!--                <span class="coin__trans">$ 0.997661</span>-->
                <span>{{coinAmount ? Number(Number(coinAmount).toFixed(8)) : 0}}</span>

              </div>
            </div>

            <div class="coin">
              <div class="coin__balance">
              <span>To</span>
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

              </div>

              <div class="coin__amount">

<!--                <span class="coin__trans">$ 0.997661  <span class="coin__trans-green">(0.221%)</span></span>-->
                <span>{{amhAmount ? Number(Number(amhAmount).toFixed(8)) : 0}}</span>
              </div>
            </div>

            <div class="arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.00066 12.172L14.3647 6.808L15.7787 8.222L8.00066 16L0.222656 8.222L1.63666 6.808L7.00066 12.172V0H9.00066V12.172Z" fill="#747474"/>
              </svg>

            </div>
          </div>

          <div class="popup-confirm__price">
            <span >Price</span>
            <p>
              1 AMH = {{pricePerAmh}} {{currentCoin.name}}
            </p>
          </div>

          <button class="my-btn">
            <span class="my-btn__content" @click="confirm">Confirm Buy</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BuyConfirm',
    props: {
      coinAmount: {
        type: String,
        required: true
      },
      amhAmount: {
        type: String,
        required: true
      },
      currentCoin: {
        type: Object,
        required: true
      }
    },
    computed: {
      pricePerAmh() {
        return (1 / this.currentCoin.amhPerUnit).toFixed(8);
      }
    },
    methods: {
      close() {
        this.$emit('close')
      },
      confirm() {
        this.$emit('confirmed')
      }
    }
  }
</script>
