
import state from '../state';
import axios from 'axios';

export default {
  showSnackbar ({commit}, {message, timeout, color, then, err, final}) {
    try {
      commit('showSnackbar', {message, timeout, color, then});
    } catch (error) {
      if (typeof err === 'function') {
        err(error);
      }
    }
    if (typeof final === 'function') {
      final();
    }
  },
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
  async getAccount ({commit}, {identity, then, error, final}) {
    console.log('getAccount');
    try {
      var response = await axios.get(state.server.hostname + state.server.path.account);
      if (response.data.ok) {
        commit('setAccount', {account: Object.assign(response.data.d, {identity: identity}), then});
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
