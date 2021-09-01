<template>
  <div id="app">
    <connect-wallet v-if="getConnectWalletModalVisible"
                    @close="setConnectWalletModalVisible(false)"></connect-wallet>
    <router-view/>
  </div>
</template>


<script>

  import ConnectWallet from "@/components/Modals/ConnectWallet";
  import {mapActions, mapGetters, mapMutations} from "vuex";
  export default {
    name: "App",
    computed: {
      ...mapGetters({
        getConnectWalletModalVisible: 'wallet/getConnectWalletModalVisible'
      })
    },
    methods: {
      ...mapActions({
        connectWallet: 'wallet/connectWallet'
      }),
      ...mapMutations({
        setConnectWalletModalVisible: 'wallet/setConnectWalletModalVisible'
      })
    },
    mounted() {
      const walletName = localStorage.getItem('usedWalletName') || 'metamask';
      this.connectWallet(walletName)
    },
    components: {ConnectWallet}
  }
</script>

<style lang="scss">
  @import "assets/scss/style";
</style>
