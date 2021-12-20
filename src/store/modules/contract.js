
export default {
    namespaced: true,
    state: {
        contractAddress: '0x30a8cab648c2a1Bc4e934aeBD871AA35986F45Da'
    },
    getters: {
        getContractAddress: state => state.contractAddress
    }
}
