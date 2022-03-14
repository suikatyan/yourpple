export default {
  isLightMode(vuetify) {
    return !vuetify.theme.dark;
  },
  isDarkMode(vuetify) {
    return vuetify.theme.dark;
  },
  toggleMode(vuetify) {
    let isDarkMode;
    if (this.isLightMode(vuetify)) {
      this.activeDarkMode(vuetify);
      isDarkMode = true;
    } else {
      this.activeLightMode(vuetify);
      isDarkMode = false;
    }

    return isDarkMode;
  },
  activeDarkMode(vuetify) {
    vuetify.theme.dark = true;
  },
  activeLightMode(vuetify) {
    vuetify.theme.dark = false;
  },
};
