
const abcJestConfig = require('./node_modules/abc-factory/config/jest/vue.typescript')
module.exports = {
  ...abcJestConfig,
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
}
