<template>
  <div>
    <h1>Account</h1>
  </div>
</template>

<script>
  export default {
    name: 'Account',
    methods: {
      close() {
        this.$emit('close')
      }
    }
  }
</script>
