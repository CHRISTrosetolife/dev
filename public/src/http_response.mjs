import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { json_to } from "./json_to.mjs";
import { error } from "./error.mjs";
import { integer_random } from "./integer_random.mjs";
import { sleep } from "./sleep.mjs";
import { retry_if } from "./retry_if.mjs";
import { retry } from "./retry.mjs";
import { import_node } from "./import_node.mjs";
export async function http_response(url) {
  assert(string_is, [url]);
  let f = await import_node("node-fetch");
  let { default: fetch } = f;
  let response = await retry(
    6,
    lambda,
    retry_if([
      "EAI_AGAIN",
      "ECONNRESET",
      "ENOTFOUND",
      "ETIMEDOUT",
      "EHOSTUNREACH",
      "Service Unavailable",
      "Not Found",
    ]),
  );
  async function lambda() {
    await sleep(integer_random(5000, 8000));
    let response = await fetch(url);
    if (!response.ok) {
      let { statusText } = response;
      throw error(
        json_to({
          url,
          statusText,
        }),
      );
    }
    return response;
  }
  return response;
}
