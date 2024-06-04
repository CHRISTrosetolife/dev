import { string_to } from "./string_to.mjs";
import { string_includes } from "./string_includes.mjs";
import { retry_if } from "./retry_if.mjs";
import { add_1 } from "./add_1.mjs";
import fetch from "node-fetch";
import { sleep } from "./sleep.mjs";
import { integer_random } from "./integer_random.mjs";
export async function http(url) {
  await sleep(integer_random(5000, 8000));
  let retry_count = 3;
  let retries = add_1(retry_count);
  let result;
  while (retries >= 1) {
    retries--;
    try {
      result = await lambda();
      break;
    } catch (e) {
      if (retry_if(e)) {
        continue;
      }
      throw e;
    }
  }
  return result;
  async function lambda() {
    let response = await fetch(url);
    let body = await response.text();
    return body;
  }
  function retry_if(e) {
    return string_includes(string_to(e), "ECONNRESET");
  }
}
