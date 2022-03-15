<template>
  <v-dialog v-model="show" persistent max-width="290">
    <v-card>
      <v-card-title>
        {{ dataMessage }}
      </v-card-title>
      <v-card-text>
        <v-progress-linear color="primary" indeterminate></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dataMessage: this.message
        ? this.message
        : this.$vuetify.lang.t('$vuetify.common.loadingDialog.message'),
    };
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
