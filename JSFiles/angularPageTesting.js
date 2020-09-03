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
describe('Angular page testing', () => {
    it('Open AngularJS', () => __awaiter(void 0, void 0, void 0, function* () {
    }));
    it('Angular title validation', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://angularjs.org/");
        // await element(by.css("a[href='https://angular.io']")).click();
        yield protractor_1.element(protractor_1.by.linkText("angular.io")).click();
        yield protractor_1.element(protractor_1.by.css("input[type='search']")).sendKeys("Hello");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhclBhZ2VUZXN0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYW5ndWxhclBhZ2VUZXN0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQStDO0FBRy9DLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFFLEVBQUU7SUFFakMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEdBQVEsRUFBRTtJQUUvQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBCQUEwQixFQUFFLEdBQVEsRUFBRTtRQUNyQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDNUMsaUVBQWlFO1FBQ2pFLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUd4RSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsQ0FBQyxDQUFDLENBQUMifQ==