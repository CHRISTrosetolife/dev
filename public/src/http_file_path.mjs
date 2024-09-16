import { http_file } from "./http_file.mjs";
import { path_encoded } from "./path_encoded.mjs";
export function http_file_path(url) {
  return path_encoded(http_file.name, url);
}
