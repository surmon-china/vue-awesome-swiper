
module.exports = {
  entry: 'src/index.ts',
  minisize: false,
  external: [
    'swiper',
    'vue',
  ],
  globals: {
    swiper: 'Swiper',
    vue: 'Vue',
  }
}
