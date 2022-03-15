export default {
  change(language, vuetify) {
    vuetify.lang.current = language;
  },
  current(vuetify) {
    return vuetify.lang.current;
  },
};
