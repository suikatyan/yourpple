import Vue from 'vue';
import authAxios from '@/utils/authAxios';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

authAxios.register((error) => {
  if (error.response) {
    if (error.response.status === 401 || error.response.status === 419) {
      router.replace({ name: 'top' });
    }
  }

  return Promise.reject(error);
});

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.defaults.withCredentials = true;
