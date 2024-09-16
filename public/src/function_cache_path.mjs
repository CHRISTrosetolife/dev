import { file_name_json } from "./file_name_json.mjs";
import { path_json_encoded } from "./path_json_encoded.mjs";
export function function_cache_path(function_name, args) {
  let key = {
    function_name,
    args,
  };
  let joined = path_json_encoded("cache", key);
  let file_path = file_name_json(joined);
  return file_path;
}
