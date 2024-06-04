import { string_includes } from "./string_includes.mjs";
import { string_to } from "./string_to.mjs";
import fetch from "node-fetch";
import { sleep } from "./sleep.mjs";
import { integer_random } from "./integer_random.mjs";
export async function http(url) {
  await sleep(integer_random(5000, 8000));
  let retries = 3;
  while (retries >= 1) {
    try {
    } catch (e) {
      let s = string_to(e);
      if (string_includes(s, "ECONNRESET")) {
        continue;
      }
      throw e;
    }
  }
  let response = await fetch(url);
  let body = await response.text();
  return body;
}
