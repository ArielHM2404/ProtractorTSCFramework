// An example configuration file
import {Config} from "protractor";

export let config:Config = {

  
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',

  
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../Features/demo.feature'],

    cucumberOpts: {
      // require step definitions
      require: [
        './StepsDefinition/*.js' // accepts a glob
      ]
    }
  
    // Options to be passed to Jasmine-node.
    // jasmineNodeOpts: {
    //   showColors: true, // Use colors in the command line report.
    // }
  };