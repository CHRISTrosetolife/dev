import { string_includes } from "./string_includes.mjs";
import { string_to } from "./string_to.mjs";
import fetch from "node-fetch";
import { sleep } from "./sleep.mjs";
import { integer_random } from "./integer_random.mjs";
export async function http(url) {
  await sleep(integer_random(5000, 8000));
  let body;
  let retries = 3;
  while (retries >= 1) {
    retries--;
    try {
      let response = await fetch(url);
      body = await response.text();
      break;
    } catch (e) {
      let s = string_to(e);
      if (string_includes(s, "ECONNRESET")) {
        continue;
      }
      throw e;
    }
  }
  return body;
}
