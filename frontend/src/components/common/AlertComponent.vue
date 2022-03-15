<template>
  <div class="ma-4 alert-area">
    <v-scroll-x-reverse-transition group>
      <v-alert
        v-for="alert in alerts"
        :key="alert.id"
        :type="alert.type"
        dismissible
        shaped
      >
        {{ alert.text }}
      </v-alert>
    </v-scroll-x-reverse-transition>
  </div>
</template>

<script>
import alerter from '@/utils/alerter';

export default {
  data() {
    return {
      registerdAlerts: alerter.getRegisterdAlerts(),
      imidiateAlerts: alerter.getImidiateAlerts(),
    };
  },
  computed: {
    alerts() {
      const alerts = [];
      alerts.push(...this.registerdAlerts);
      alerts.push(...this.imidiateAlerts);

      return alerts;
    },
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      alerter.clear();
      alerter.show();
      next();
    });
    this.$router.afterEach(() => {});
  },
};
</script>

<style scoped>
.alert-area {
  position: fixed;
  right: 0;
  z-index: 9999;
}
</style>
