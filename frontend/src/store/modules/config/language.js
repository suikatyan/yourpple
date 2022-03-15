import LANGUAGES from '@/constants/languages';

export default {
  namespaced: true,
  state: {
    current: LANGUAGES.JA,
  },
  getters: {
    current: (state) => state.current,
  },
  actions: {},
  mutations: {
    current(state, { vuetify, language }) {
      vuetify.lang.current = language;
      state.current = language;
    },
  },
};
