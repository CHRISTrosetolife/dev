import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { http_response } from "./http_response.mjs";
export async function http(url) {
  assert(string_is, [url]);
  let response = await http_response(url);
  let body = await response.text();
  return body;
}
