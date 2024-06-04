import { string_includes } from "./string_includes.mjs";
import { string_to } from "./string_to.mjs";
import { web_not_is } from "./web_not_is.mjs";
import { http_data_get } from "./http_data_get.mjs";
import { import_multi } from "./import_multi.mjs";
export async function http_get(url) {
  let axios = await import_multi("axios", "axios");
  if (web_not_is()) {
    axios = axios.default;
  }
  let retries = 3;
  let result;
  while (retries >= 1) {
    try {
      result = await axios.get(url);
    } catch (e) {
      if (retries >= 1) {
        let s = string_to(e);
        if (string_includes(s, "ECONNRESET")) {
        }
      }
      throw e;
    }
  }
  return http_data_get(result);
}
