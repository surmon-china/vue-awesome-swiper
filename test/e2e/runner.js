// 1. start the dev server using production config
process.env.NODE_ENV = 'testing'
var server = require('../../build/dev-server.js')

// 2. run the nightwatch test suite against it
// to run in additional browsers:
//    1. add an entry in test/e2e/nightwatch.conf.json under "test_settings"
//    2. add it to the --env flag below
// For more information on Nightwatch's config file, see
// http://nightwatchjs.org/guide#settings-file
var spawn = require('cross-spawn')
var runner = spawn(
  './node_modules/.bin/nightwatch',
  [
    '--config', 'test/e2e/nightwatch.conf.js',
    '--env', 'chrome,firefox'
  ],
  {
    stdio: 'inherit'
  }
)

runner.on('exit', function (code) {
  server.close()
  process.exit(code)
})

runner.on('error', function (err) {
  server.close()
  throw err
})
