import { json_to } from "./json_to.mjs";
import { error } from "./error.mjs";
import { integer_random } from "./integer_random.mjs";
import { sleep } from "./sleep.mjs";
import { retry_if } from "./retry_if.mjs";
import { retry } from "./retry.mjs";
import { import_node } from "./import_node.mjs";
export async function http_response(url) {
  let f = await import_node("node-fetch");
  let { default: fetch } = f;
  let response = await retry(
    4,
    lambda,
    retry_if(["ECONNRESET", "ENOTFOUND", "ETIMEDOUT", "EHOSTUNREACH"]),
  );
  if (!response.ok) {
    let statusText = response;
    throw error(
      json_to({
        url,
        response,
      }),
    );
  }
  async function lambda() {
    await sleep(integer_random(5000, 8000));
    let response = await fetch(url);
    return response;
  }
  return response;
}
