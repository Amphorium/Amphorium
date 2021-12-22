export default {
    namespaced: true,
    state: {
        showBuyBtn: false
    },
    mutations: {
        setBtnVisible(state, payload) {
            state.showBuyBtn = payload;
        }
    },
    getters: {
        getBtnVisible: state => state.showBuyBtn,
    }
}
