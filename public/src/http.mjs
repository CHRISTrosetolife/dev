import { retry } from "./retry.mjs";
import { string_to } from "./string_to.mjs";
import { string_includes } from "./string_includes.mjs";
import fetch from "node-fetch";
import { sleep } from "./sleep.mjs";
import { integer_random } from "./integer_random.mjs";
import { log } from "./log.mjs";
export async function http(url) {
  await sleep(integer_random(5000, 8000));
  let retry_count = 3;
  let body = await retry(retry_count, lambda, retry_if);
  async function lambda() {
    let response = await fetch(url);
    let body = await response.text();
    return body;
  }
  function retry_if(e) {
    log({
      e,
    });
    return string_includes(string_to(e), "ECONNRESET");
  }
}
