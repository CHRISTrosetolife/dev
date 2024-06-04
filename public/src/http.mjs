import { retry_if } from "./retry_if.mjs";
import { add_1 } from "./add_1.mjs";
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
      if (retry_if(e)) {
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
