const {Builder, By, Key, until, WebElement} = require('selenium-webdriver');
const chromedriver = require('chromedriver');
(async function task3() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.manage().setTimeouts( { implicit: 1000 } );
    await driver.get('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');
    await driver.executeScript("document.getElementsByClassName('cm-string')[0].textContent='\"https://www.bing.com\"';"); //- failed0
    // await driver.executeScript("document.getElementsByClassName('cm-string')[0].innerText='\"https://www.bing.com\"';"); //- failed
    // await driver.executeScript("document.getElementsByClassName('cm-string')[0].firstChild.data='\"https://www.bing.com';\""); //- failed
    
    // driver.executeScript("document.getElementcsByClassName('cm-string')[1].innerText='\"Bing\"';");
    // await driver.sleep(1000);
    // await driver.findElement(By.xpath("//span[contains(text(),'\"https://www.bing.com\"')]")).click();
    // await driver.findElement(By.xpath("//button[contains(text(),'Run')]")).click();
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.wait();
  }
})();