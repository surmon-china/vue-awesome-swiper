
module.exports = {
  entry: 'src/index.ts',
  minisize: false,
  eslint: {},
  resolve: ['.vue', '.ts'],
  external: [
    'swiper',
    'vue',
  ],
  globals: {
    swiper: 'Swiper',
    vue: 'Vue',
  }
}
