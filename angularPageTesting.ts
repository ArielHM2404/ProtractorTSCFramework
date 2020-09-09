import{element, by, browser} from 'protractor';
import{async} from 'q';
import { angularHomePage } from './PageObject/angularHomePage';

describe('Angular page testing', ()=> {

    it('Open AngularJS', async() => {
        
    });

    it('Angular title validation', async() => {
        let homePage= new angularHomePage();

        await browser.get("https://angularjs.org/");
        // await element(by.css("a[href='https://angular.io']")).click();
        await homePage.angularLink.click();
        // await element(by.linkText("angular.io")).click();
        await homePage.searchBox.sendKeys("Hello");
        // await element(by.css("input[type='search']")).sendKeys("Hello");    
    
        
});

});