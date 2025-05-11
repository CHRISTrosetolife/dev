import { never } from "./never.mjs";
import { assert } from "./assert.mjs";
import { http_response } from "./http_response.mjs";
export async function http(url) {
  assert(never, []);
  let response = await http_response(url);
  let body = await response.text();
  return body;
}
