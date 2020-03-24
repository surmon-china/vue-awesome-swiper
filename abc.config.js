module.exports = {
  entry: 'src/index.ts',
  resolve: ['.vue', '.ts'],
  targets: ['umd', 'esm'],
  minimize: false,
  external: [
    'swiper',
    'vue',
  ],
  globals: {
    swiper: 'Swiper',
    vue: 'Vue',
  }
}
