import { Given, When, Then } from "cucumber";
import {Calculator} from '../PageObject/Calculator';
import { browser } from "protractor";
import { angularHomePage } from '../PageObject/angularHomePage';

let cal = new Calculator();
let homePage = new angularHomePage();


        Given('I will navigate to calc site', async ()=> {
            await browser.get('http://juliemr.github.io/protractor-demo/');
           
         });

         When('I add two numbers {string} and {string}', async (string, string2)=> {
            
           await cal.firstEditBox.sendKeys(string);
           await cal.secondEDitBox.sendKeys(string2);
          
         });

         Then('The output will be {string}', async (string)=> {
          await cal.go.click();
          await cal.getResult.getText().then(function(text)
          {
          
          console.log(text);
          })
    
         });

               Given('I will navigate to {string}', async (string)=> {
                if(string=="calc") {
                  await browser.get('http://juliemr.github.io/protractor-demo/');
                
                } else if(string=="Angular Page") {
                  await browser.get("https://angularjs.org/");
                }
                
               });
      
               When('I clicked on header link', async ()=> {
                await homePage.angularLink.click();
               });
      
               Then('you will enter {string} in seach box', async ()=> {
                await homePage.searchBox.sendKeys("Hello");
               });

        