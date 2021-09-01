import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

export default {
    namespaced: true,
    state: {
        connectWalletModalVisible: false,
        isMetamaskInstalled: true,
        currentConnectionInfo: {
            account: null,
            balance: null,
            chainId: null,
            walletName: null,
        },
    },
    mutations: {
        setConnectWalletModalVisible(state, payload) {
            state.connectWalletModalVisible = payload;
        },
        setIsMetamaskInstalled(state, payload) {
          state.isMetamaskInstalled = payload
        },
        setCurrentConnectionInfo(state, obj){
            if(obj.account) state.currentConnectionInfo.account = obj.account
            if (obj.balance) state.currentConnectionInfo.balance = obj.balance;
            if (obj.chainId) state.currentConnectionInfo.chainId = obj.chainId;
            if (obj.walletName){
                state.currentConnectionInfo.walletName = obj.walletName;
                localStorage.setItem('usedWalletName', obj.walletName)
            }
        },
        unsetWallet(state) {
            console.log('unset')
            state.currentConnectionInfo.walletName = null;
            state.currentConnectionInfo.chainId = null;
            state.currentConnectionInfo.account = null;
            state.currentConnectionInfo.balance = null;
            localStorage.removeItem('usedWalletName');
        }
    },
    actions: {
        async setChain({commit}, provider) {
            const chainId = await window.web3.eth.getChainId();
            if(chainId!==56 && chainId !== '0x38') {
                try {
                    await provider.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '0x38' }],
                    });
                } catch (switchError) {
                    // This error code indicates that the chain has not been added to MetaMask.
                    if (switchError.code === 4902) {
                        try {
                            await provider.request({
                                method: 'wallet_addEthereumChain',
                                params: [{ chainId: '0x38', rpcUrls: ['https://bsc-dataseed.binance.org/'], chainName: 'BNB' }]
                            });
                            await provider.request({
                                method: 'wallet_switchEthereumChain',
                                params: [{ chainId: '0x38' }],
                            });

                        } catch (addError) {
                            console.log(addError)
                            commit('setCurrentConnectionInfo',{
                                chainId: await window.web3.eth.getChainId()
                            })
                        }
                    } else { // handle other "switch" errors
                        console.log('handle another errors')
                        commit('setCurrentConnectionInfo',{
                            chainId: await window.web3.eth.getChainId()
                        })
                    }
                }
            }
        },
        async connectWallet({commit, dispatch}, walletName) {
            console.log('used wallet', walletName)
            let provider = null;
            if(walletName === 'walletConnect') {
                 provider = new WalletConnectProvider({
                     rpc: {
                       56: 'https://bsc-dataseed.binance.org/'
                     },
                    qrcodeModalOptions: {
                        mobileLinks: [
                            'metamask'
                        ]
                    }
                })
                try{ 
                    await provider.enable();
                    window.web3 = new Web3(provider);
                    console.log('web3', window.web3);
                    console.info('wallet connect web3 init');
                }catch(e){
                    console.log(e);
                }
                
                
            }
            else {
                const isMetamaskInstalled = () => {
                    const { ethereum } = window;
                    return Boolean(ethereum && ethereum.isMetaMask)
                }
                if(!isMetamaskInstalled()) {
                    commit('setIsMetamaskInstalled', false)
                }
                else {
                    try {
                        await window.ethereum.request({ method: 'eth_requestAccounts' });
                        window.web3 = new Web3(window.ethereum)
                        provider= window.ethereum;
                        dispatch('setChain', provider)
                    } catch(e){
                        throw new Error('Check your wallet!')
                    }
                }
            }
            const accounts = await window.web3.eth.getAccounts();
            const balance = await window.web3.eth.getBalance(accounts[0]);
            const chainId = await window.web3.eth.getChainId();
            console.log('account', accounts[0]);
            console.log('balance', balance);
            console.log('chain id', chainId);

            console.log('window.ethereum',!!window.ethereum,'provider',!!provider);

            provider.on("chainChanged", async (res)=>{
               commit('setCurrentConnectionInfo',{
                   chainId: res,
                   balance: await window.web3.eth.getBalance(accounts[0])
               })
               dispatch('setChain', provider)
            })
            provider.on('accountsChanged',  async (acs)=> {
                console.log('Account has been changed...', acs)
                if(!acs.length) {
                    commit('unsetWallet');
                }
                commit('setCurrentConnectionInfo',{
                    account:acs[0],
                    balance: await window.web3.eth.getBalance(acs[0]),
                    chainId: await window.web3.eth.getChainId()
                })
            })
            commit('setCurrentConnectionInfo', {
                account: accounts[0],
                balance,
                chainId,
                walletName
            })
            provider.on('connect', () =>commit('setWalletName', walletName))
            provider.on('disconnect', () => commit('unsetWallet'))
            return {
                account: accounts[0],
                balance,
                chainId,
                walletName
            }
        }
    },
    getters: {
        getConnectWalletModalVisible: state => state.connectWalletModalVisible,
        getCurrentConnectionInfo: state =>  state.currentConnectionInfo,
        isWrongChainId: state=>{
           if (state.currentConnectionInfo.chainId){
               if ( (state.currentConnectionInfo.chainId!==56 && state.currentConnectionInfo.chainId !== '0x38')){
                   console.log('chain id', state.currentConnectionInfo.chainId);
                    return true
                }else return false
            }else{
                return undefined
            }
        },
        getIsMetamaskInstalled: state => state.isMetamaskInstalled
    }
}
