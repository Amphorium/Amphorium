<template>
  <div class="popup-container">
    <div class="popup-bg"></div>
    <div class="popup-slide">
      <div class="popup popup-connect popup-waiting">
        <button @click="close" class="popup__close"></button>
        <div class="popup__content">
          <div class="popup-preloader">
            <div class="line"></div>
            <div class="popup-preloader__img">
              <svg width="44" height="52" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.0631 22.3389C35.5099 19.7921 39.6148 14.484 39.6148 7.54843V5.03222H43.8083V0H0.195312V5.03222H4.38883V7.54833C4.38883 14.4839 8.49368 19.792 10.9405 22.3388C12.3197 23.7744 13.8065 25.0144 15.2913 25.9999C13.8066 26.9854 12.3195 28.2256 10.9405 29.661C8.49368 32.2078 4.38883 37.5159 4.38883 44.4515V46.9676H0.195312V52H43.8083V46.9678H39.6148V44.4517C39.6148 37.5161 35.5099 32.208 33.0631 29.6612C31.6839 28.2256 30.1971 26.9856 28.7123 26.0001C30.197 25.0145 31.6839 23.7743 33.0631 22.3389ZM29.4341 33.1477C31.3568 35.1489 34.5825 39.2786 34.5825 44.4517V46.9678H9.42115V44.4517C9.42115 39.2787 12.6467 35.1489 14.5695 33.1477C17.6387 29.953 20.7633 28.5161 22.0018 28.5161C23.2403 28.5161 26.3649 29.953 29.4341 33.1477ZM22.0018 23.4839C20.7633 23.4839 17.6387 22.047 14.5695 18.8523C12.6467 16.8511 9.42115 12.7214 9.42115 7.54833V5.03222H34.5825V7.54833C34.5825 12.7213 31.3568 16.8511 29.4341 18.8523C26.3649 22.047 23.2403 23.4839 22.0018 23.4839Z" fill="white"/>
              </svg>

            </div>
          </div>
          <div class="popup-connect__title">
            Waiting for
            confirmation
          </div>

         <div class="popup-waiting__text">
           Buying 0.000300317 BNB for 1 AMH
         </div>

          <div class="popup-connect__text">Confirm this transaction in your wallet</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WaitConfirm',
    methods: {
      close() {
        this.$emit('close')
      }
    }
  }
</script>
