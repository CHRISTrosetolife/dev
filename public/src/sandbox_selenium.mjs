import { path_join } from "./path_join.mjs";
import { url_localhost_client } from "./url_localhost_client.mjs";
import { each_object_async } from "./each_object_async.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { file_read_json_previous } from "./file_read_json_previous.mjs";
import { sleep } from "./sleep.mjs";
import { Builder, Browser, By, Key, until } from "selenium-webdriver";
export async function sandbox_selenium() {
  let secret = await file_read_json_previous("secret");
  let facebook = object_property_get(secret, "facebook");
  let driver = await new Builder().forBrowser(Browser.EDGE).build();
  try {
    await driver.get(app_url_localhost());
    await each_object_async(facebook, async function (key, value) {
      await driver.findElement(By.id(key)).sendKeys(value);
    });
    await driver.findElement(By.name("email")).sendKeys(Key.RETURN);
    await sleep(100000);
    return;
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
  } finally {
    await driver.quit();
  }
}
