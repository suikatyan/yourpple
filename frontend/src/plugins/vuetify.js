import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import en from '@/languages/en';
import ja from '@/languages/ja';

Vue.use(Vuetify);

export default new Vuetify({
  options: {
    customProperties: true,
  },
  lang: {
    locales: { ja, en },
  },
  icons: {
    iconfont: 'fa',
  },
  theme: {
    themes: {
      light: {
        primary: '#da6659',
      },
      dark: {
        primary: '#da6659',
      },
    },
  },
});
