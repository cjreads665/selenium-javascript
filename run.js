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

  //year format is correct yet its throwing error
  it('Fill the form without iframe', async function() {

    try {  
      await driver.findElement(By.id('fname')).sendKeys("Shahid");
      await driver.findElement(By.id('lname')).sendKeys("Alam");
      await driver.findElement(By.id('dob')).sendKeys("2000-01-05");
      await driver.findElement(By.xpath("//button[text()='Submit']")).click();
      await new Promise(resolve => setTimeout(resolve, 10000)); //for debugging
    } catch (error) {
      console.log(error);
    }

  });


  //year format is correct yet its throwing error
  it('Fill the form without iframe', async function() {

    try {
        const h1Elements = await driver.findElements(By.css('h1'));
        let iframeContainer;
        /**
         * go through each h1 elements in the page and find the one with
         * 'IFrame without ID' text and then select the next iframe tag after it
         */
        for (let h1 of h1Elements) {
          const text = await h1.getText();
          if (text.includes('IFrame without ID')) {
            //select the following iframe element after the h1 with text - IFrame without ID
            iframeContainer = await h1.findElement(By.xpath('following-sibling::iframe'));
            break;
          }
        }
        
        /*switch to the iframe context
          use this to switch to default context driver.switchTo().defaultContent().      
          the frame() exists for iframe elements only
        */
        await driver.switchTo().frame(iframeContainer);
        
      await driver.findElement(By.id('fname')).sendKeys("Shahid");
      await driver.findElement(By.id('lname')).sendKeys("Alam");
      await driver.findElement(By.id('dob')).sendKeys("2000-01-05");
      await driver.findElement(By.xpath("//button[text()='Submit']")).click();
      await new Promise(resolve => setTimeout(resolve, 10000)); //for debugging
    } catch (error) {
      console.log(error);
    }
  });


});

