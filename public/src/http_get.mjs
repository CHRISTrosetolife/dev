import { web_is } from "./web_is.mjs";
import { http_data_get } from "./http_data_get.mjs";
import { import_multi } from "./import_multi.mjs";
export async function http_get(url) {
  let axios = await import_multi("axios", "axios");
  if (web_is()) {
    axios = axios.default;
  } else {
  }
  let result = await result_get();
  let v = http_data_get(result);
  return v;
  async function result_get() {
    let v2 = await axios.get(url);
    return v2;
  }
}
