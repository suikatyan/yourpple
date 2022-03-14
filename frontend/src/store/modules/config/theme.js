export default {
  namespaced: true,
  state: {
    dark: false,
  },
  getters: {
    dark: (state) => state.dark,
  },
  actions: {

  },
  mutations: {
    activateDarkMode(state, vuetify) {
      state.dark = true;
      vuetify.theme.dark = state.dark;
    },
    deactivateDarkMode(state, vuetify) {
      state.dark = false;
      vuetify.theme.dark = state.dark;
    },
    toggleDarkMode(state, vuetify) {
      if (state.dark) {
        this.commit('config/theme/deactivateDarkMode', vuetify);
      } else {
        this.commit('config/theme/activateDarkMode', vuetify);
      }
    },
  },
};
