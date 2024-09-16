import { folder_gitignore } from "./folder_gitignore.mjs";
import { path_join } from "./path_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { string_encoded_to } from "./string_encoded_to.mjs";
import { json_to } from "./json_to.mjs";
export function path_json_encoded(folder_name, key) {
  let key_json = json_to(key);
  let key_encoded = string_encoded_to(key_json);
  let joined = path_join([folder_gitignore(), folder_name, file_name]);
  let file_path = file_name_json(joined);
  return file_path;
}
