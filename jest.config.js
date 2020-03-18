
module.exports = {
  ...require('abc-factory/config/jest/vue.typescript'),
  globals: {
    'ts-jest': {
      // https://kulshekhar.github.io/ts-jest/user/config/isolatedModules
      isolatedModules: true
    }
  }
}
