import { http_data_get } from "./http_data_get.mjs";
export async function http_get(url) {
  let result = await axios.get(url);
  return http_data_get(result);
}
