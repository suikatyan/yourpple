<template>
  <div>
    <breadcrumbs-component :items="breadcrumbItems" />

    <h2>
      {{ $vuetify.lang.t('$vuetify.login.title') }}
    </h2>

    <v-card class="mb-3" outlined>
      <v-card-title>
        <v-icon color="blue lighten-1">fab fa-twitter fa-fw</v-icon>
        {{ $vuetify.lang.t('$vuetify.login.register.title') }}
      </v-card-title>
      <v-card-text>
        <p>
          {{ $vuetify.lang.t('$vuetify.login.register.message1') }}
        </p>
        <p class="text-center">
          <v-btn
            class="text-capitalize"
            color="blue lighten-1"
            @click="login"
          >
            {{ $vuetify.lang.t('$vuetify.login.register.button') }}
          </v-btn>
        </p>
        <p class="text-center">
          <v-icon color="warning">fas fa-exclamation-triangle</v-icon>
          {{ $vuetify.lang.t('$vuetify.login.register.warning') }}
        </p>
      </v-card-text>
    </v-card>

    <v-card outlined>
      <v-card-title>
        <v-icon color="info">fas fa-info-circle fa-fw</v-icon>
        {{ $vuetify.lang.t('$vuetify.login.caution.title') }}
      </v-card-title>
      <v-card-text>
        <p>
          {{ $vuetify.lang.t('$vuetify.login.caution.message1') }}
          <ul>
            <li>{{ $vuetify.lang.t('$vuetify.login.caution.list.reason1') }}</li>
            <li>{{ $vuetify.lang.t('$vuetify.login.caution.list.reason2') }}</li>
          </ul>
        </p>
        <p>
          {{ $vuetify.lang.t('$vuetify.login.caution.message2') }}
        </p>
        <p>
          {{ $vuetify.lang.t('$vuetify.login.caution.message3') }}
          <router-link to="about">
            {{ $vuetify.lang.t('$vuetify.about.title') }}
          </router-link>
        </p>
      </v-card-text>
    </v-card>

    <loading-dialog v-model="isProcessing" />
  </div>
</template>

<script>
import breadcrumbs from '@/utils/breadcrumbs';
import BreadcrumbsComponent from '@/components/common/BreadcrumbsComponent.vue';
import axios from 'axios';
import URLS from '@/constants/urls';
import alerter from '@/utils/alerter';
import LoadingDialog from '@/components/common/LoadingDialog.vue';

export default {
  components: {
    BreadcrumbsComponent,
    LoadingDialog,
  },
  data() {
    return {
      isProcessing: false,
      breadcrumbItems: breadcrumbs(['top', 'login'], this.$vuetify),
    };
  },
  methods: {
    async login() {
      this.isProcessing = true;

      try {
        await axios.get(URLS.CSRF_COOKIE);

        const response = await axios.post(URLS.LOGIN);
        const { url } = response.data;
        window.location.href = url;
      } catch {
        alerter.showImidiate({
          text: this.$vuetify.lang.t('$vuetify.alert.error'),
          type: 'error',
        });

        this.isProcessing = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
