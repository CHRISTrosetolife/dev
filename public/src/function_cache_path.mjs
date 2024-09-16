import { path_encoded } from "./path_encoded.mjs";
import { json_to } from "./json_to.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function function_cache_path(function_name, args) {
  let key = {
    function_name,
    args,
  };
  let key_json = json_to(key);
  let joined = path_encoded("cache", key_json);
  let file_path = file_name_json(joined);
  return file_path;
}
