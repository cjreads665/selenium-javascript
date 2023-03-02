const { Builder, By, Key, until } = require('selenium-webdriver');
// const assert = require('assert');

describe('CloudQA Tests', function() {
  let driver;

  beforeEach(async function() {
    try{
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://app.cloudqa.io/home/AutomationPracticeForm');
    }
    catch(error){
        console.log(error);
    }
 
  });

  afterEach(function(done) {
     driver.quit();
     done();
  });

//   it('Fill the first form', async function() {
//     try {
//       await driver.findElement(By.id('fname')).sendKeys("Shahid");
//       await driver.findElement(By.id('lname')).sendKeys("Alam");
//       await driver.findElement(By.id('dob')).sendKeys("2001-08-02");
//       await driver.findElement(By.id('Agree')).click(); // automationtestform
//       await driver.findElement(By.id('automationtestform')).click();
//     } catch (error) {
//       console.log(error);
//     }
//   });

  it('Fill the form without iframe', async function() {

    try {
        const h1Elements = await driver.findElements(By.css('h1'));
        let iframeContainer;
        for (let h1 of h1Elements) {
          const text = await h1.getText();
          if (text.includes('IFrame without ID')) {
            //select the following iframe element after the h1 with text - IFrame without ID
            iframeContainer = await h1.findElement(By.xpath('following-sibling::iframe'));
            break;
          }
        }
        
        // switch to the iframe context
        await driver.switchTo().frame(iframeContainer);
        
        // find the element with id "fname" inside the iframe
        const fnameInput = await driver.findElement(By.id("fname"));
        
        // perform an action on the element, e.g. sending keys
        await fnameInput.sendKeys("John");
        
      setTimeout(() => {}, 5000);
    } catch (error) {
      console.log(error);
    }
  });

});

