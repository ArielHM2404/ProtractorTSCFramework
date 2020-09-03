"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Protractor All method', function () {
    function add(a, b) {
        protractor_1.element(protractor_1.by.model("first")).sendKeys(a);
        protractor_1.element(protractor_1.by.model("second")).sendKeys(b);
        protractor_1.element(protractor_1.by.id("gobutton")).click();
    }
    it('Locators', function () {
        protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
        add(2, 4);
        add(62, 46);
        add(25, 44);
        add(21, 44);
        add(25, 5);
        //			element(by.model("first")).sendKeys("3");
        //			element(by.model("second")).sendKeys("5");
        //			
        //			element(by.id("gobutton")).click();
        //			
        //			element(by.model("first")).sendKeys("36");
        //			element(by.model("second")).sendKeys("51");
        //			
        //			element(by.id("gobutton")).click();
        //			
        //			element(by.model("first")).sendKeys("13");
        //			element(by.model("second")).sendKeys("45");
        //			
        //			element(by.id("gobutton")).click();
        protractor_1.element.all(protractor_1.by.repeater("result in memory")).
            count().then(function (text) {
            console.log("Total of rows " + text);
        });
        // element.all(by.repeater("result in memory")).
        // each(function(item) {
        // 	item.element(by.css("td:nth-child(3)")).
        // 	getText().then(function(text){
        // 		console.log(text);
        // 	})
        // })
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vQWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBQStDO0FBRS9DLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRTtJQUNoQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUNmLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFcEMsQ0FBQztJQUdELEVBQUUsQ0FBQyxVQUFVLEVBQUU7UUFDZCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBRTFELEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDVCxHQUFHLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1gsR0FBRyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztRQUNYLEdBQUcsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFDWCxHQUFHLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2IsOENBQThDO1FBQzlDLCtDQUErQztRQUMvQyxLQUFLO1FBQ0wsd0NBQXdDO1FBQ3hDLEtBQUs7UUFDTCwrQ0FBK0M7UUFDL0MsZ0RBQWdEO1FBQ2hELEtBQUs7UUFDTCx3Q0FBd0M7UUFDeEMsS0FBSztRQUNMLCtDQUErQztRQUMvQyxnREFBZ0Q7UUFDaEQsS0FBSztRQUNMLHdDQUF3QztRQUNyQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDNUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO1FBRUYsZ0RBQWdEO1FBQ2hELHdCQUF3QjtRQUN4Qiw0Q0FBNEM7UUFDNUMsa0NBQWtDO1FBQ2xDLHVCQUF1QjtRQUN2QixNQUFNO1FBRU4sS0FBSztJQUVOLENBQUMsQ0FBQyxDQUFBO0FBR0osQ0FBQyxDQUFDLENBQUEifQ==