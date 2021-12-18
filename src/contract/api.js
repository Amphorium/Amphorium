import abi from "@/util/abi";
import store from '@/store'
//import Web3 from "web3";
let methods = null;
let account = null;
let amhMethods = null;

const initWeb3Methods = (abiName, contractAddress, walletAddress) => {
    // const web3_1 = new Web3('https://bsc-dataseed.binance.org/');
    // const web3_2 = new Web3('https://bsc-dataseed.binance.org/');
    //console.log(contractAddress)
    methods = new window.web3.eth.Contract(abi[abiName], contractAddress).methods;
    amhMethods = new window.web3.eth.Contract(abi['abiBsc'], store.getters['contract/getContractAddress']).methods;
    // console.log(methods)
    // console.log(amhMethods)
    account = walletAddress;
}

const formatPrice = (price) => {
    return Math.round(price * 1e18)
        .toLocaleString('fullwide', {useGrouping: false});
}

const approve = amount => {
    console.log(amount)
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
    console.log(account, store.getters['contract/getContractAddress'])
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
    console.log(formatPrice(tokenQuantity))
    return new Promise((resolve, reject) => {
        amhMethods.buyAmhTokenByBnb()
            .call({
                value: formatPrice(tokenQuantity),
                from: account
            }, (err, res) => {
                if(err) {
                    console.log('sdlskfjsldkfjslkdfjslkdfj', err)
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
    buyAmhTokenByBnb
}
