// An example configuration file
import {Config} from "protractor";
import * as reporter from 'cucumber-html-reporter';

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
      tags: '@AngularTesting',
      format: 'json:tmp/CucumberReport.json',
      require: [
        './StepsDefinition/*.js' // accepts a glob
      ]
    },

    onComplete: ()=> {
      var options = {
        theme: 'bootstrap',
        jsonFile: 'tmp/CucumberReport.json',
        output: 'tmp/Cucumber_Report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
          
        }
    };
 
    reporter.generate(options);
    },

  
    // Options to be passed to Jasmine-node.
    // jasmineNodeOpts: {
    //   showColors: true, // Use colors in the command line report.
    // }
  };