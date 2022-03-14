import Vue from 'vue';
import Vuex from 'vuex';
import config from '@/store/modules/config';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const persistedState = createPersistedState({
  key: 'yourppleConfig',
  paths: [
    'config',
  ],
});

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    config: config,
  },
  pulgins: [persistedState],
});
