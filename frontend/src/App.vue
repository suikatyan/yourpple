<template>
  <v-app>
    <header-component />

    <v-main>
      <alert-component />

      <router-view />
    </v-main>

    <footer-component />
  </v-app>
</template>

<script>
import AlertComponent from '@/components/common/AlertComponent.vue';
import HeaderComponent from '@/components/common/HeaderComponent.vue';
import FooterComponent from '@/components/common/FooterComponent.vue';

export default {
  components: {
    AlertComponent,
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
.alert-area {
  position: fixed;
  right: 0;
}
</style>
