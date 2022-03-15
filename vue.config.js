const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: ['vuetify', 'vuex-persist'],
  configureWebpack: {
    watchOptions: {
      poll: true,
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, 'frontend/src'),
      },
    },
  },
  lintOnSave: 'default',
  outputDir: './frontend/dist',
  assetsDir: './frontend/assets',
  pages: {
    index: {
      entry: './frontend/src/main.js',
      template: './frontend/public/index.html',
      filename: 'index.html',
      title: 'title',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  devServer: {
    allowedHosts: 'all',
  },
});
