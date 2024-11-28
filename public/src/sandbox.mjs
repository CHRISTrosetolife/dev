import { file_read_json_previous } from "./file_read_json_previous.mjs";
import { sleep } from "./sleep.mjs";
import { Builder, Browser, By, Key, until } from "selenium-webdriver";
export async function sandbox() {
  let service_account = await file_read_json_previous("secret");
  let driver = await new Builder().forBrowser(Browser.EDGE).build();
  try {
    await driver.get("https://www.facebook.com/");
    await driver.findElement(By.id("email")).sendKeys("9043144052");
    await driver.findElement(By.id("pass")).sendKeys("9043144052");
    await sleep(100000);
    return;
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
  } finally {
    await driver.quit();
  }
}
