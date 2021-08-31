<template>
  <div>
    <h1>Swap header</h1>
    <button @click="$emit('connectWallet')">Connect wallet</button>
    <button @click="$emit('openAccount')">Open account</button>
  </div>
</template>


<script>
  export default {
    name: 'SwapHeader'
  }
</script>
