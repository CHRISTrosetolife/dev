import { invoke_async } from "./invoke_async.mjs";
import { html_load } from "./html_load.mjs";
import { web_is } from "./web_is.mjs";
import { http_data_get } from "./http_data_get.mjs";
import { import_multi } from "./import_multi.mjs";
export async function http_get(url) {
  let axios = await import_multi("axios", "axios");
  let wrapper;
  if (web_is()) {
    wrapper = html_load;
  } else {
    axios = axios.default;
    wrapper = invoke_async;
  }
  let result = await wrapper(async function () {
    let v2 = await axios.get(url);
    return v2;
  });
  let v = http_data_get(result);
  return v;
}
