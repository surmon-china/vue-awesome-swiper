// This is the webpack config used for unit tests.

const merge = require('webpack-merge');
const baseConfig = require('./base.conf');

module.exports = merge(baseConfig, {
  mode: 'development',
  // use inline sourcemap for karma-sourcemap-loader
  devtool: '#inline-source-map',
  resolve: {
    alias: {
      'swiper$': 'swiper/dist/js/swiper.js'
    }
  }
});

