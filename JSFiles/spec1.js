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
describe('Protractor babe steps', () => __awaiter(void 0, void 0, void 0, function* () {
    //First parameter - Test suite name
    //Second Parameter - function(will have all tests (it blocks))
    it('Open Angular Website', () => __awaiter(void 0, void 0, void 0, function* () {
        //Write your protractor code
        yield protractor_1.browser.get("https://angularjs.org/");
        yield protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        yield protractor_1.browser.sleep(5000).then(function () {
            protractor_1.browser.get("https://angularjs.org/");
            console.log("I am the last step to execute");
        });
    }));
    it('Close browser', function () {
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYzEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcGVjMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE0QztBQUU1QyxRQUFRLENBQUMsdUJBQXVCLEVBQUMsR0FBTyxFQUFFO0lBQ3pDLG1DQUFtQztJQUNuQyw4REFBOEQ7SUFFOUQsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEdBQU8sRUFBRTtRQUNuQyw0QkFBNEI7UUFDNUIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUNoRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM3QixvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUcvQyxDQUFDLENBQUMsQ0FBQztJQUVKLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsZUFBZSxFQUFFO0lBRXBCLENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9