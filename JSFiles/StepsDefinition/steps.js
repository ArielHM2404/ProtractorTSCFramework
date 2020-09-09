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
const cucumber_1 = require("cucumber");
const Calculator_1 = require("../PageObject/Calculator");
const protractor_1 = require("protractor");
let cal = new Calculator_1.Calculator();
cucumber_1.Given('I will navigate to calc site', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield cal.firstEditBox.sendKeys(string);
    yield cal.secondEDitBox.sendKeys(string2);
}));
cucumber_1.Then('The output will be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield cal.go.click();
    yield cal.getResult.getText().then(function (text) {
        console.log(text);
    });
}));
cucumber_1.Given('I will navigate to {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == "calc") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "Angular Page") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When('I clicked on header link', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.When('you will navigate to angular page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('you will enter {string} in seach box', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwc0RlZmluaXRpb24vc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MseURBQW9EO0FBQ3BELDJDQUFxQztBQUVyQyxJQUFJLEdBQUcsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUVuQixnQkFBSyxDQUFDLDhCQUE4QixFQUFFLEdBQVEsRUFBRTtJQUM1QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFFbEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUV2RSxNQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFNUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQ25ELE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixNQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUdoRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUMsQ0FBQyxDQUFBO0FBRUgsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVHLGdCQUFLLENBQUMsNkJBQTZCLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUNwRCxJQUFHLE1BQU0sSUFBRSxNQUFNLEVBQUU7UUFDakIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0tBRWhFO1NBQU0sSUFBRyxNQUFNLElBQUUsY0FBYyxFQUFFO1FBQ2hDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUM3QztBQUVGLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMEJBQTBCLEVBQUU7SUFDL0Isb0VBQW9FO0lBQ3BFLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG1DQUFtQyxFQUFFO0lBQ3hDLG9FQUFvRTtJQUNwRSxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxzQ0FBc0MsRUFBRSxVQUFVLE1BQU07SUFDM0Qsb0VBQW9FO0lBQ3BFLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDIn0=