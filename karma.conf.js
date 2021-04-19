
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
process.env.CHROME_BIN = require('puppeteer').executablePath();

process.on('infrastructure_error', (error) => {
  console.error('infrastructure_error', error);
  });

process.on('error', (error) => {
  console.error('error', error);
});

module.exports = function (config) {

  // console.log(JSON.stringify(config))

  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-spec-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')

    ],
    client: {
      captureConsole: false,
      jasmine: {
        random: false
      },
      //clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/ngv'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'lcovonly' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['spec'],
    specReporter: {
      maxLogLines: 1000,
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: true,
      failFast: true
      },
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: true,
    browsers: ['ChromeHeadlessCustom'],
    customLaunchers:
      {
        ChromeHeadlessCustom: {
          base: 'ChromeHeadless',
          flags: ['--no-sandbox', '--watch=false' ,'--code-coverage' ],
        }
      }
    ,
    singleRun: true,
    captureTimeout: 40000,
    browserDisconnectTimeout: 20000,
    browserDisconnectTolerance:  2,
    browserNoActivityTimeout: 40000
  });
};
