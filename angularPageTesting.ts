import{element, by, browser} from 'protractor';
import{async} from 'q';

describe('Angular page testing', ()=> {

    it('Open AngularJS', async() => {
        
    });

    it('Angular title validation', async() => {
        await browser.get("https://angularjs.org/");
        // await element(by.css("a[href='https://angular.io']")).click();
        await element(by.linkText("angular.io")).click();
        await element(by.css("input[type='search']")).sendKeys("Hello");    
    
        
});

});