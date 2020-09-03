import {browser, by, element} from 'protractor';
import { Calculatior } from './PageObject/Calculatior';

describe('Chain locators demo',function() {  


    it('Open Angular js website',async()=> {
       let cal = new Calculatior();

    browser.get('http://juliemr.github.io/protractor-demo/');
    //repeater ,  chain locators, And css for identical tags
    await cal.firstEditBox.sendKeys("3");
    await cal.secondEDitBox.sendKeys("5");
    await cal.go.click();
    // element(by.model("first")).sendKeys("3");
    // element(by.model("second")).sendKeys("5");
    
    element(by.id("gobutton")).click();
    await cal.getResult.getText().then(function(text)
    {
    
    console.log(text);
    })
    
    
    // element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
    
    
    
    
    
    
    
    })
    
    })