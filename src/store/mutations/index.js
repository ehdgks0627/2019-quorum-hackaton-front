
export default {
  showSnackbar (state, {message, timeout, color, then}) {
    state.snackbar.show = true;
    state.snackbar.color = color || 'info';
    state.snackbar.timeout = timeout || 10000;
    state.snackbar.message = message;

    if (typeof then === 'function') {
      then();
    }
  },
  setAccount (state, {account, then}) {
    state.account.identity = account.user || account.username || account.identity;
    state.account.balance = account.money;
    state.account.total = account.total;

    if (typeof then === 'function') {
      then();
    }
  },
  getAccount (state, {account, then}) {
    this.dispatch('setAccount', {account, then});
    if (typeof then === 'function') {
      then();
    }
  }
};
