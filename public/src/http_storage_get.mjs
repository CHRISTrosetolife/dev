import { storage_url } from "./storage_url.mjs";
import { http_get } from "./http_get.mjs";
export async function http_storage_get(file_path) {
  let v = await http_get(storage_url(file_path));
  return v;
}
