import { http_response } from "./http_response.mjs";
export async function http(url) {
  let response = await http_response(url);
  let body = await response.text();
  return body;
}
