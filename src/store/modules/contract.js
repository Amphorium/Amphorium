
export default {
    namespaced: true,
    state: {
        contractAddress: '0xaa8EdB3Ef74B93D25ABF036F8f24846903A6138d'
    },
    getters: {
        getContractAddress: state => state.contractAddress
    }
}
