import {After, Before, Status} from 'cucumber';
import { browser } from 'protractor';



// Asynchronous Callback
Before(function () {
  browser.manage().window().maximize();

});

// Asynchronous Promise
After(async function (scenario) {
    if(scenario.result.status=== Status.FAILED) {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    }
  // Assuming this.driver is a selenium webdriver

});