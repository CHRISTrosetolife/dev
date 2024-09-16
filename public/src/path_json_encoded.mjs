import { folder_gitignore } from "./folder_gitignore.mjs";
import { path_join } from "./path_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { string_encoded_to } from "./string_encoded_to.mjs";
import { json_to } from "./json_to.mjs";
export function path_json_encoded(key, folder_name) {
  let key_json = json_to(key);
  let key_encoded = string_encoded_to(key_json);
  let file_name = file_name_json(key_encoded);
  let file_path = path_join([folder_gitignore(), folder_name, file_name]);
  return file_path;
}
