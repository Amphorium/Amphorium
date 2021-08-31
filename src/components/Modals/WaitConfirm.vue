<template>
  <div>
    <h1>Waiting for confirmation</h1>
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
