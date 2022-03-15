import Vue from 'vue';
import Vuex from 'vuex';
import config from '@/store/modules/config/config';
import VuexPersistence from 'vuex-persist';
import SecureStorage from '@/utils/secureStorage';

Vue.use(Vuex);

const secureStorage = new SecureStorage({
  encodingType: process.env.NODE_ENV === 'production' ? 'aes' : '',
  isCompression: process.env.NODE_ENV === 'production',
});
const vuexPersistence = new VuexPersistence({
  key: 'ya-config',
  modules: ['config'],
  storage: secureStorage,
});

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    config,
  },
  plugins: [vuexPersistence.plugin],
});
