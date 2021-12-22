
export default {
    namespaced: true,
    state: {
        contractAddress: '0x19414193c27347Aabaf4f7CC7dF0e45aAEFBC61C'
    },
    getters: {
        getContractAddress: state => state.contractAddress
    }
}
