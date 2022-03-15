import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'top',
    component: () =>
      import(/* webpackChunkName: "top" */ '@/views/TopView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/LoginView.vue'),
  },
  {
    path: '/login-callback',
    name: 'loginCallback',
    component: () =>
      import(
        /* webpackChunkName: "loginCallback" */ '@/views/LoginCallbackView.vue'
      ),
  },
  {
    path: '/my-page',
    name: 'myPage',
    component: () =>
      import(/* webpackChunkName: "myPage" */ '@/views/MyPageView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/AboutView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
