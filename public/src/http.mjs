import { list_any } from "./list_any.mjs";
import { retry } from "./retry.mjs";
import { string_to } from "./string_to.mjs";
import { string_includes } from "./string_includes.mjs";
import fetch from "node-fetch";
import { sleep } from "./sleep.mjs";
import { integer_random } from "./integer_random.mjs";
import { log } from "./log.mjs";
export async function http(url) {
  let list = ["ECONNRESET", "ENOTFOUND"];
  let response = await retry(3, lambda, function retry_if(e) {
    log({
      e,
    });
    return list_any(list, (i) => string_includes(string_to(e), i));
  });
  let body = await response.text();
  return body;
  async function lambda() {
    await sleep(integer_random(5000, 8000));
    let response = await fetch(url);
    return response;
  }
}
