import { folder_gitignore } from "./folder_gitignore.mjs";
import { path_join } from "./path_join.mjs";
import { string_encoded_to } from "./string_encoded_to.mjs";
export function path_json_encoded(folder_name, file_name) {
  let file_name_encoded = string_encoded_to(file_name);
  let joined = path_join([folder_gitignore(), folder_name, file_name_encoded]);
  return joined;
}
