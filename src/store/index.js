import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import vuexI18n from 'vuex-i18n';
import ko from '../i18n/ko.js';
import en from '../i18n/en.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
});

export default store;

Vue.use(vuexI18n.plugin, store);

Vue.i18n.add('ko', ko);
Vue.i18n.add('en', en);
