import abi from '@/util/abi';

export default {
    namespaced: true,
    state: {
        contractAddress: '',
        abi: abi
    },
    getters: {
        getContractAddress: state => state.contractAddress,
        getABI: state=>state.abi
    }
}
