
export default {
  setAccount (state, {account, then}) {
    state.identity = account.username;

    if (typeof then === 'function') {
      then();
    }
  },
  getAccount (state, {account, then}) {
    this.dispatch('setAccount', {account});
    if (typeof then === 'function') {
      then();
    }
  }
};
