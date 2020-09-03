import {browser, element} from 'protractor';

describe('Protractor babe steps',async()=> {
	//First parameter - Test suite name
	//Second Parameter - function(will have all tests (it blocks))
	
	it('Open Angular Website', async()=> {
		//Write your protractor code
		await browser.get("https://angularjs.org/");
		
		await browser.get("https://juliemr.github.io/protractor-demo/");
		await browser.sleep(5000).then(function() {
			 browser.get("https://angularjs.org/");
			 console.log("I am the last step to execute");	
		
			
		});
		
	})
	
	it('Close browser', function() {
		
	})
})