<template>
  <div>
    <h1>Confirm buy</h1>
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
