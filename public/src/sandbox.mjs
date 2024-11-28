import { Builder, Browser, By, Key, until } from "selenium-webdriver";
export async function sandbox() {
  let driver = await new Builder().forBrowser(Browser.EDGE).build();
  try {
    await driver.get("https://www.facebook.com/");
    return;
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
  } finally {
    await driver.quit();
  }
}
