
export default {
    namespaced: true,
    state: {
        contractAddress: '0x294e5765761fff3b037079f02b92c53bbe847002'
    },
    getters: {
        getContractAddress: state => state.contractAddress
    }
}
