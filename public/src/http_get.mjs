import { html_load } from "./html_load.mjs";
import { web_is } from "./web_is.mjs";
import { http_data_get } from "./http_data_get.mjs";
import { import_multi } from "./import_multi.mjs";
export async function http_get(url) {
  let axios = await import_multi("axios", "axios");
  let get;
  if (web_is()) {
    get = async function () {
      let v3 = await html_load(result_get);
      return v3;
    };
  } else {
    axios = axios.default;
    get = result_get;
  }
  let result = await get();
  let v = http_data_get(result);
  return v;
  async function result_get() {
    let v2 = await axios.get(url);
    return v2;
  }
}
