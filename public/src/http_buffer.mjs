import { http_response } from "./http_response.mjs";
export async function http_buffer(url) {
  let response = await http_response(url);
  let body = await response.buffer();
  return body;
}
