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
  created() {
    this.$vuetify.lang.current = this.$store.getters['config/language/current'];
    this.$vuetify.theme.dark = this.$store.getters['config/theme/dark'];
  },
};
</script>

<style scoped>
.alert-area {
  position: fixed;
  right: 0;
}
</style>
