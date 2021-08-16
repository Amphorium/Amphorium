<template>
  <div class="popup-container">
    <div class="popup-bg"></div>
    <div class="popup-slide">
      <div class="popup popup-error">
        <button @click="closeWindow" class="popup__close"></button>
        <div class="popup__content">
          <div class="popup__img">
            <img src="@/assets/img/modal-error.png" alt="" />
          </div>
          <div class="popup__title">
            Oops..
          </div>
          <div class="popup__msg">
            {{ message }}
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
  name: "ErrorModal",
  props: {
    message: {
      type: String,
      default: () => 'Something went wrong!'
    }
  },
  methods: {
    closeWindow() {
      this.$emit("close");
    }
  },
}
</script>

<style scoped>

</style>
