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
const Calculator_1 = require("./PageObject/Calculator");
describe('Chain locators demo', function () {
    it('Open Angular js website', () => __awaiter(this, void 0, void 0, function* () {
        let cal = new Calculator_1.Calculator();
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        yield cal.firstEditBox.sendKeys("3");
        yield cal.secondEDitBox.sendKeys("5");
        yield cal.go.click();
        // element(by.model("first")).sendKeys("3");
        // element(by.model("second")).sendKeys("5");
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        yield cal.getResult.getText().then(function (text) {
            console.log(text);
        });
        // element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdGVzdHNwZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWdEO0FBQ2hELHdEQUFxRDtBQUVyRCxRQUFRLENBQUMscUJBQXFCLEVBQUM7SUFHM0IsRUFBRSxDQUFDLHlCQUF5QixFQUFDLEdBQU8sRUFBRTtRQUNuQyxJQUFJLEdBQUcsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUU5QixvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3pELHdEQUF3RDtRQUN4RCxNQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLDRDQUE0QztRQUM1Qyw2Q0FBNkM7UUFFN0Msb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsTUFBTSxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFHaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQTtRQUdGLGdGQUFnRjtJQVFoRixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsQ0FBQyxDQUFDLENBQUEifQ==