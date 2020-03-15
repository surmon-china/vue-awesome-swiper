module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/recommended'
  ],
  rules: {
    'vue/max-attributes-per-line': [0]
  }
}
