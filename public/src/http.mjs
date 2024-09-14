import { retry_if } from "./retry_if.mjs";
import { retry } from "./retry.mjs";
import { sleep } from "./sleep.mjs";
import { integer_random } from "./integer_random.mjs";
import { import_node } from "./import_node.mjs";
export async function http(url) {
  let f = await import_node("node-fetch");
  let { default: fetch } = f;
  let response = await retry(
    3,
    lambda,
    retry_if(["ECONNRESET", "ENOTFOUND", "ETIMEDOUT", "EHOSTUNREACH"]),
  );
  let body = await response.text();
  return body;
  async function lambda() {
    await sleep(integer_random(5000, 8000));
    let response = await fetch(url);
    return response;
  }
}
