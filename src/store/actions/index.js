
import state from '../state';
import axios from 'axios';

export default {
  setAccount ({commit}, {account, then, error, final}) {
    console.log('setAccount', account);
    try {
      state.account = account;
      commit('setAccount', {account, then});
    } catch (error_) {
      if (typeof error === 'function') {
        error(error_);
      }
    }
    if (typeof final === 'function') {
      final();
    }
  },
  async getAccount ({commit}, {then, error, final}) {
    console.log('getAccount');
    try {
      var response = await axios.get(state.server.hostname + state.server.path.account);
      if (response.data.ok) {
        commit('setAccount', {account: response.data.d, then});
      }
    } catch (error_) {
      if (typeof error === 'function') {
        error(error_);
      }
    }
    if (typeof final === 'function') {
      final();
    }
  }
};
