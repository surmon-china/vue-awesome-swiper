module.exports = [
  {
    entry: 'src/exporter.ts',
    fileName: 'exporter',
    targets: ['umd', 'esm'],
    minimize: false,
    external: ['vue'],
    globals: {
      vue: 'Vue'
    },
    typescript: {
      tsconfigOverride: {
        compilerOptions: {
          declaration: false
        }
      }
    }
  },
  {
    entry: 'src/index.ts',
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
]
