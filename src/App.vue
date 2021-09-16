<template>
  <div id="app">
    <connect-wallet v-if="getConnectWalletModalVisible"
                    @close="setConnectWalletModalVisible(false)"></connect-wallet>
    <error-modal :can-close="false" v-if="isWrongChainId" :message="'Wrong chain network...'"></error-modal>
    <router-view/>
  </div>
</template>


<script>

  import ConnectWallet from "@/components/Modals/ConnectWallet";
  import {mapGetters, mapMutations} from "vuex";
  import ErrorModal from "@/components/Modals/ErrorModal";
  export default {
    name: "App",
    computed: {
      ...mapGetters({
        getConnectWalletModalVisible: 'wallet/getConnectWalletModalVisible',
        isWrongChainId: 'wallet/isWrongChainId'
      })
    },
    methods: {
      ...mapMutations({
        setConnectWalletModalVisible: 'wallet/setConnectWalletModalVisible'
      })
    },
    components: {ErrorModal, ConnectWallet}
  }
</script>

<style lang="scss">
  @import "assets/scss/style";
</style>
