// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

const webpackConfig = require('../../config/test.conf');

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    // 浏览器环境
    browsers: ['PhantomJS'],
    // 测试框架
    frameworks: ['mocha', 'sinon-chai'],
    // 输出报告
    reporters: ['spec', 'coverage'],
    // 在browsers里面运行，把需要测试的文件都 require 进来，在 browsers 里跑，使用 frameworks 测试js，通过 reporters 输出报告
    files: ['./index.js'],
    // 为入口文件制定预处理器，测试 index.js 之前用 webpack 和 sourcemap 处理一下
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    // 给webpack指定相关的配置文件
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    // 覆盖报告，coverage 是代码测试覆盖率的一个 reporter，也就是说告诉你项目的代码有多少测试了
    // 下面是 vue-cli 对这个的一个配置
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  });
};
