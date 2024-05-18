import { storage_url } from "./storage_url.mjs";
import { http_get } from "./http_get.mjs";
export function http_storage(file_path) {
  return http_get(storage_url(file_path));
}
