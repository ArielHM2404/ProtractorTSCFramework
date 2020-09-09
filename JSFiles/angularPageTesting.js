"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const angularHomePage_1 = require("./PageObject/angularHomePage");
describe('Angular page testing', () => {
    it('Open AngularJS', () => __awaiter(void 0, void 0, void 0, function* () {
    }));
    it('Angular title validation', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new angularHomePage_1.angularHomePage();
        yield protractor_1.browser.get("https://angularjs.org/");
        // await element(by.css("a[href='https://angular.io']")).click();
        yield homePage.angularLink.click();
        // await element(by.linkText("angular.io")).click();
        yield homePage.searchBox.sendKeys("Hello");
        // await element(by.css("input[type='search']")).sendKeys("Hello");    
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhclBhZ2VUZXN0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYW5ndWxhclBhZ2VUZXN0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQStDO0FBRS9DLGtFQUErRDtBQUUvRCxRQUFRLENBQUMsc0JBQXNCLEVBQUUsR0FBRSxFQUFFO0lBRWpDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFRLEVBQUU7SUFFL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxHQUFRLEVBQUU7UUFDckMsSUFBSSxRQUFRLEdBQUUsSUFBSSxpQ0FBZSxFQUFFLENBQUM7UUFFcEMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVDLGlFQUFpRTtRQUNqRSxNQUFNLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsb0RBQW9EO1FBQ3BELE1BQU0sUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsdUVBQXVFO0lBRy9FLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxDQUFDLENBQUMsQ0FBQyJ9