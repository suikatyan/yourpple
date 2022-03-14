import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import en from '@/languages/en';
import ja from '@/languages/ja';
import Config from '@/utils/config';
import CONFIG_KEYS from '@/constants/configKeys';
import LANGUAGES from '@/constants/languages';

Vue.use(Vuetify);

export default new Vuetify({
  options: {
    customProperties: true,
  },
  lang: {
    locales: { ja, en },
    current: Config.get(CONFIG_KEYS.LANGUAGE, LANGUAGES.JA),
  },
  icons: {
    iconfont: 'fa',
  },
  theme: {
    dark: Config.get(CONFIG_KEYS.DARK_MODE, false),
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
