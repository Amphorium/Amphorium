import Vue from 'vue'
import Vuex from 'vuex'
import Wallet from './modules/wallet'
import Contract from './modules/contract'
import General from './modules/general'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    wallet: Wallet,
    contract: Contract,
    general: General
  }
})
