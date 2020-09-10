#Feature demo
Feature: I'm going to validate web app functionalities

@AngularTesting
Scenario: Calculatio add function

Given I will navigate to calc "http://juliemr.github.io/protractor-demo/"
When  I add two numbers "2" and "5"
Then The output will be "9"

Scenario: Calculatio add function2

Given I will navigate to calc "site"
When  I add two numbers "4" and "5"
Then The output will be "9"

@AngularTesting
Scenario: Opening Angular Page

Given I will navigate to "Angular Page"
When I clicked on header link
# Then you will enter "Hello" in seach box
# Then The output will be "10"