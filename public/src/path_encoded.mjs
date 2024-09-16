import { path_encoded_parent } from "./path_encoded_parent.mjs";
import { path_join } from "./path_join.mjs";
import { string_encoded_to } from "./string_encoded_to.mjs";
export function path_encoded(folder_name, file_name) {
  let file_name_encoded = string_encoded_to(file_name);
  let joined = path_join([path_encoded_parent(folder_name), file_name_encoded]);
  return joined;
}
