import { http_file } from "./http_file.mjs";
import { path_encoded_parent } from "./path_encoded_parent.mjs";
export function http_file_parent() {
  return path_encoded_parent(http_file.name);
}
