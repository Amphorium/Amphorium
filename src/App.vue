<template>
  <div id="app">
    <connect-wallet v-if="getConnectWalletModalVisible"
      @close="setConnectWalletModalVisible(false)">
    </connect-wallet>
    <error-modal :can-close="false" v-if="isWrongChainId" :message="'Wrong chain network...'"></error-modal>
    <router-view/>
  </div>
</template>


<script>

  import ConnectWallet from "@/components/Modals/ConnectWallet";
  import {mapActions, mapGetters, mapMutations} from "vuex";
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
      ...mapActions({
        connectWallet: 'wallet/connectWallet'
      }),
      ...mapMutations({
        setConnectWalletModalVisible: 'wallet/setConnectWalletModalVisible'
      })
    },
    components: {ErrorModal, ConnectWallet},
    created() {
      this.$router.replace(this.$route.path);
      let wallet = localStorage.getItem('usedWalletName');
      if(wallet) {
        this.connectWallet(wallet);
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/style";
</style>
