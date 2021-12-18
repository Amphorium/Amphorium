
export default {
    namespaced: true,
    state: {
        contractAddress: '0x5b985bd6017263c5f8e4f072d85e7bc061e8d586'
    },
    getters: {
        getContractAddress: state => state.contractAddress
    }
}
