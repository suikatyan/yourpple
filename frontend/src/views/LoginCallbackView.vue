<template>
  <div>
    <p v-if="message">
      {{ message }}
    </p>
    <p v-if="errorCode">
      {{ $vuetify.lang.t('$vuetify.loginCallback.errorCode') }}
      {{ errorCode }}
    </p>
    <p>
      <router-link to="top">
        {{ $vuetify.lang.t('$vuetify.loginCallback.back') }}
      </router-link>
    </p>

    <loading-dialog v-model="isProcessing" />
  </div>
</template>

<script>
import axios from 'axios';
import URLS from '@/constants/urls';
import alerter from '@/utils/alerter';
import LoadingDialog from '@/components/common/LoadingDialog.vue';

export default {
  components: {
    LoadingDialog,
  },
  data() {
    return {
      message: this.$vuetify.lang.t('$vuetify.loginCallback.message'),
      errorCode: '',
      isProcessing: true,
    };
  },
  async mounted() {
    try {
      this.errorCode = this.$route.query.error;
      if (this.errorCode) {
        if (this.errorCode === 'access_denied') {
          this.message = this.$vuetify.lang.t('$vuetify.loginCallback.accessDenied');
        } else {
          this.message = '';
        }
      }

      const response = await axios.post(URLS.LOGIN_CALLBACK, this.$route.query);
      if (response.data.success) {
        alerter.showImidiate({
          text: this.$vuetify.lang.t('$vuetify.alert.loggedIn'),
          type: 'success',
        });
        this.$router.replace({ name: 'myPage' });
      } else {
        throw new Error();
      }
    } catch {
      alerter.showImidiate({
        text: this.$vuetify.lang.t('$vuetify.alert.error'),
        type: 'error',
      });

      this.message = '';
      this.isProcessing = false;
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
