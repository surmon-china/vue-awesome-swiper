module.exports = {
  entry: 'src/index.ts',
  minisize: false,
  resolve: ['.vue', '.ts'],
  targets: ['umd', 'esm'],
  parser: 'babel',
  eslint: {},
  external: [
    'swiper',
    'vue',
  ],
  globals: {
    swiper: 'Swiper',
    vue: 'Vue',
  }
}
