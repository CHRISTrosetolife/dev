import { add_1 } from "./add_1.mjs";
import { string_includes } from "./string_includes.mjs";
import { string_to } from "./string_to.mjs";
import fetch from "node-fetch";
import { sleep } from "./sleep.mjs";
import { integer_random } from "./integer_random.mjs";
export async function http(url) {
  await sleep(integer_random(5000, 8000));
  let body;
  let retries = add_1(3);
  while (retries >= 1) {
    retries--;
    try {
      body = await lambda();
      break;
    } catch (e) {
      if (string_includes(string_to(e), "ECONNRESET")) {
        continue;
      }
      throw e;
    }
  }
  return body;
  async function lambda() {
    let response = await fetch(url);
    let body = await response.text();
    return body;
  }
}
