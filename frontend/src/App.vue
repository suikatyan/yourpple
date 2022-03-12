<template>
  <v-app>
    <header-component />

    <v-main>
      <router-view />
    </v-main>

    <footer-component />
  </v-app>
</template>

<script>
import HeaderComponent from '@/components/common/HeaderComponent.vue';
import FooterComponent from '@/components/common/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data: () => ({
    //
  }),
};
</script>
