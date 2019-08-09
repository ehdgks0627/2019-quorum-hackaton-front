
export default {
  setAccount (state, {account, then}) {
    state.account.identity = account.username || account.identity;
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
