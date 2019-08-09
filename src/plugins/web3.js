
import Vue from 'vue';
import Web3 from 'web3';

if (typeof window.web3 !== 'undefined') {
  Vue.prototype.$web3 = new Web3(window.web3.currentProvider);
}
