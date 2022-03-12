<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    header
    <v-spacer></v-spacer>

  </v-app-bar>
</template>

<script>
export default {
  created() {
    this.$vuetify.theme.dark = false;
  },
};
</script>

<style lang="scss" scoped>

</style>
