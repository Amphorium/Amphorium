import abi from "@/util/abi";
import store from '@/store'
let methods = null;
let account = null;
let amhMethods = null;
let amhBalanceOfMethods = null;

const initWeb3Methods = (abiName, contractAddress, walletAddress) => {
    methods = new window.web3.eth.Contract(abi[abiName], contractAddress).methods;
    amhMethods = new window.web3.eth.Contract(abi['abiBsc'], store.getters['contract/getContractAddress']).methods;
    amhBalanceOfMethods = new window.web3.eth.Contract(abi['abiAmh'], '0x5f4c449F342441a85E649C662934Ab8357B983C1').methods;
    account = walletAddress;
}

const formatPrice = (price) => {
    return Math.round(price * 1e18)
        .toLocaleString('fullwide', {useGrouping: false});
}

const approve = amount => {
    return new Promise((resolve, reject) => {
        methods.approve(store.getters['contract/getContractAddress'], formatPrice(amount))
            .send({
                from: account
            }, err => {
                if(err) {
                    reject(err)
                }
            })
            .once('confirmation', (confirmationNumber, receipt) => {
                if(receipt.status === true) {
                    resolve()
                }
                else {
                    reject();
                }
            })
    })
}

const allowance = () => {
    return new Promise((resolve, reject) => {
        methods.allowance(account, store.getters['contract/getContractAddress'])
            .call({
                from: account
            }, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res / 1e18)
            })
    })
}

const balanceOfCoin = () => {
    return new Promise((resolve, reject) => {
        methods.balanceOf(account)
            .call({
                from: account
            }, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res / 1e18)
            })
    })
}

const balanceOfAmh = () => {
    return new Promise((resolve, reject) => {
        amhBalanceOfMethods.balanceOf(account)
            .call({
                from: account
            }, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res / 1e6)
            })
    })
}

const getAvailableBuyAmountByBnb = () => {
    return new Promise((resolve, reject) => {
        console.log(amhMethods)
        amhMethods.getAvailabeBuyAmountByBnb(account)
            .call({
                from: account
            }, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res / 1e18)
            })
    })
}

const getAvailableBuyAmountByTokens = () => {
    return new Promise((resolve, reject) => {
        amhMethods.getAvailabeBuyAmountByTokens(account)
            .call({
                from: account
            }, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res / 1e18)
            })
    })
}

const buyAmhTokenByToken = (tokenQuantity, contractAddress) => {
    return new Promise((resolve, reject) => {
        amhMethods.buyAmhTokenByToken(formatPrice(tokenQuantity), contractAddress)
            .call({
                from: account
            }, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res)
            })
    })
}

const buyAmhTokenByBnb = (tokenQuantity) => {
    return new Promise((resolve, reject) => {
        amhMethods.buyAmhTokenByBnb()
            .call({
                value: formatPrice(tokenQuantity),
                from: account
            }, (err, res) => {
                if(err) {
                    console.log(err)
                    reject(err)
                }
                resolve(res)
            })
    })
}

export default {
    initWeb3Methods,
    allowance,
    approve,
    buyAmhTokenByToken,
    buyAmhTokenByBnb,
    balanceOfCoin,
    balanceOfAmh,
    getAvailableBuyAmountByBnb,
    getAvailableBuyAmountByTokens
}
