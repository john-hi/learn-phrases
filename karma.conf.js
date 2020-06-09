// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const {
  join
} = require('path');

module.exports = function (config) {
  config.set({
    basePath: '.',
    frameworks: [
      'jasmine',
      '@angular-devkit/build-angular'
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-webdriver-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter'),
      require('karma-spec-reporter')
    ],
    client: {
      clearContext: false,
      jasmine: {
        random: true
      }
    },
    junitReporter: {
      outputDir: join(__dirname, 'junit-report/learn-phrases')
    },
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: true,
      failFast: false
    },
    coverageIstanbulReporter: {
      dir: join(__dirname, 'coverage/learn-phrases'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
      thresholds: {
        statements: 90,
        branches: 90,
        functions: 90,
        lines: 90
      }
    },
    reporters: ['spec', 'junit', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: logLevel = 'INFO',
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    browserDisconnectTimeout: 30000,
    browserDisconnectTolerance: 1,
    browserNoActivityTimeout: 30000,
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--disable-gpu',
          '--no-sandbox',
          '--remote-debugging-port=9222',
          '--headless'
        ]
      }
    },
    singleRun: false
  });
};
