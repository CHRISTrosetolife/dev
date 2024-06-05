import { retry_if } from "./retry_if.mjs";
import { retry } from "./retry.mjs";
import fetch from "node-fetch";
import { sleep } from "./sleep.mjs";
import { integer_random } from "./integer_random.mjs";
export async function http(url) {
  let response = await retry(3, lambda, retry_if(["ECONNRESET", "ENOTFOUND"]));
  let body = await response.text();
  return body;
  async function lambda() {
    await sleep(integer_random(5000, 8000));
    let response = await fetch(url);
    return response;
  }
}
