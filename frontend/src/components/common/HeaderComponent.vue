<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-title>
      <h1>
        {{ $vuetify.lang.t('$vuetify.title') }}
      </h1>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="toggleMode">
      <v-icon v-if="isLightMode">fas fa-moon</v-icon>
      <v-icon v-else>fas fa-sun</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    isLightMode() {
      return this.$store.getters['config/theme/dark'];
    },
  },
  methods: {
    toggleMode() {
      this.$store.commit('config/theme/toggleDarkMode', this.$vuetify);
    },
  },
};
</script>

<style lang="scss" scoped></style>
