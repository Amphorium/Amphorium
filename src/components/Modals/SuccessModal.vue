<template>
  <div class="popup-container">
    <div class="popup-bg"></div>
    <div class="popup-slide">
      <div class="popup">
        <button @click="closeWindow" class="popup__close"></button>
        <div class="popup__content">
          <div class="popup__img">
            <img src="@/assets/img/modal-success.png" alt="" />
          </div>
          <div class="popup__title">
            Success
          </div>
          <div class="popup__msg">
            Lorem ipsum dolor sit amet
          </div>
          <div class="popup__btn">
            <button type="button" @click="closeWindow">
              <span>OK</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessModal",
  methods: {
    closeWindow() {
      this.$emit("close");
    }
  },
}
</script>

<style scoped>

</style>