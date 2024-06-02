import { web_not_is } from "./web_not_is.mjs";
import { log } from "./log.mjs";
import { http_data_get } from "./http_data_get.mjs";
import { import_multi } from "./import_multi.mjs";
export async function http_get(url) {
  let axios = await import_multi("axios", "axios");
  if (web_not_is()) {
  }
  log({
    axios,
  });
  let result = await axios.get(url);
  return http_data_get(result);
}
