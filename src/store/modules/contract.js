
export default {
    namespaced: true,
    state: {
        contractAddress: '0x7d420fc9c839f761f488ffe22e10a1bd3c988a10'
    },
    getters: {
        getContractAddress: state => state.contractAddress
    }
}
