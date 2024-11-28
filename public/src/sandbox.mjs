import { each_object_async } from "./each_object_async.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { file_read_json_previous } from "./file_read_json_previous.mjs";
import { sleep } from "./sleep.mjs";
import { Builder, Browser, By, Key, until } from "selenium-webdriver";
export async function sandbox() {
  let secret = await file_read_json_previous("secret");
  let facebook = object_property_get(secret, "facebook");
  let driver = await new Builder().forBrowser(Browser.EDGE).build();
  try {
    await driver.get("https://www.facebook.com/");
    await each_object_async(facebook, async (key, value) => {
      await driver.findElement(By.id("email")).sendKeys("9043144052");
    });
    await driver.findElement(By.id("pass")).sendKeys("9043144052");
    await sleep(100000);
    return;
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
  } finally {
    await driver.quit();
  }
}
