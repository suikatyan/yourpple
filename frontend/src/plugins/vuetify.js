import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ja from 'vuetify/lib/locale/ja';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { ja },
    current: 'ja',
  },
  icons: {
    iconfont: 'fa',
  },
  theme: {
    themes: {
      light: {
        primary: colors.green,
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
});
