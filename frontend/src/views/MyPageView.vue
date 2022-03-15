<template>
  <v-container>
    <my-page-component />
  </v-container>
</template>

<script>
import MyPageComponent from '@/components/pages/my-page/MyPageComponent.vue';

export default {
  components: {
    MyPageComponent,
  },
};
</script>

<style lang="scss" scoped></style>
