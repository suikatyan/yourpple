<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-app-bar-title>
      <h1>
        {{ $vuetify.lang.t('$vuetify.title') }}
      </h1>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn
      icon
      @click="toggleMode"
    >
      <v-icon v-if="isLightMode">fas fa-moon</v-icon>
      <v-icon v-else>fas fa-sun</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import theme from '@/utils/theme';
import Config from '@/utils/config';
import CONFIG_KEYS from '@/constants/configKeys';

export default {
  computed: {
    isLightMode() {
      return theme.isLightMode(this.$vuetify);
    },
  },
  methods: {
    toggleMode() {
      const isDarkMode = theme.toggleMode(this.$vuetify);
      Config.set(isDarkMode, CONFIG_KEYS.DARK_MODE);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
