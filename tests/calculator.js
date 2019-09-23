let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {

    it('addition test', function () {

        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('6');
        homepage.enterFirstNumber('5');

        //element(by.model('second')).sendKeys('6');
        homepage.enterSecondNumber('5');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding', '12'));
        //expect(result.getText()).toEqual('12');
        homepage.verifyResult('10');

        browser.sleep(2000)

    });

    it('subtraction test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('5');

        homepage.enterSecondNumber('3');

        homepage.clickGo1();

        homepage.verifyResult('2');

        browser.sleep(2000)

    });

});