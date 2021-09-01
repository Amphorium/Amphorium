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
                    <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.94689 0.239075L5.82031 0.663314V12.9737L5.94689 13.0983L11.7433 9.72054L5.94689 0.239075Z" fill="#B1B9DF"/>
                      <path d="M5.9487 0.239075L0.152344 9.72054L5.9487 13.0983V7.12325V0.239075Z" fill="#D5DAF1"/>
                      <path d="M5.94635 14.1802L5.875 14.266V18.6512L5.94635 18.8567L11.7462 10.8042L5.94635 14.1802Z" fill="#B1B9DF"/>
                      <path d="M5.9487 18.8565V14.1801L0.152344 10.8041L5.9487 18.8565Z" fill="#D5DAF1"/>
                      <path d="M5.94922 13.0981L11.7455 9.72044L5.94922 7.12311V13.0981Z" fill="#959EC8"/>
                      <path d="M0.152344 9.72044L5.94863 13.0981V7.12311L0.152344 9.72044Z" fill="#B1B7D6"/>
                    </svg>

                  </div>

                  ETH
                </div>

              </div>

              <div class="coin__amount">
                <span class="coin__trans">$ 0.997661</span>
                <span>0.000300317</span>

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

                <span class="coin__trans">$ 0.997661  <span class="coin__trans-green">(0.221%)</span></span>
                <span>0.000300317</span>
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
              1 AMH = 0.0030003 ETH
            </p>
          </div>

          <button class="my-btn">
            <span class="my-btn__content">Confirm Buy</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BuyConfirm',
    methods: {
      close() {
        this.$emit('close')
      }
    }
  }
</script>
