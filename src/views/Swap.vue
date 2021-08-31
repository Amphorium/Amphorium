<template>
  <div>
    <SwapHeader
        @connectWallet="connectWalletVisible = true;"
        @openAccount="accountVisible = true;"
    ></SwapHeader>
    <connect-wallet @close="connectWalletVisible = false;" v-if="connectWalletVisible"></connect-wallet>
    <wait-confirm @close="waitConfirmVisible = false;" v-if="waitConfirmVisible"></wait-confirm>
    <buy-confirm @close="buyConfirmVisible = false;" v-if="buyConfirmVisible"></buy-confirm>
    <account @close="accountVisible = false;" v-if="accountVisible"></account>
    <h1>Swap</h1>
    <button @click="buyConfirmVisible = true;">buy amh</button>
  </div>
</template>

<script>
  import SwapHeader from "../components/swap/SwapHeader";
  import ConnectWallet from "../components/Modals/ConnectWallet";
  import WaitConfirm from "../components/Modals/WaitConfirm";
  import BuyConfirm from "../components/Modals/BuyConfirm";
  import Account from "../components/Modals/Account";
  export default {
    name: 'Swap',
    data: () => ({
      connectWalletVisible: false,
      waitConfirmVisible: false,
      buyConfirmVisible: false,
      accountVisible: false
    }),
    components: {Account, BuyConfirm, WaitConfirm, ConnectWallet, SwapHeader}
  }
</script>
