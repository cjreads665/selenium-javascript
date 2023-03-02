const { Builder,By } = require("selenium-webdriver");

describe('Amazon search', function() {
    let driver;
    
    before(async function() {
      driver = await new Builder().forBrowser('chrome').build();
    });
  
    after(async function() {
      await driver.quit();
    });
  
    it('should search for a product on Amazon.in', async function() {
      await driver.get('https://www.amazon.in/');
      await driver.findElement(By.id('twotabsearchtextbox')).sendKeys('iPhone 13', Key.RETURN);
      const title = await driver.getTitle();
      assert.strictEqual(title, 'Amazon.in : iPhone 13');
    });
  });
  

