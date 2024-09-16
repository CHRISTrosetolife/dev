import { path_json_encoded } from "./path_json_encoded.mjs";
export function function_cache_path(function_name, args) {
  let key = {
    function_name,
    args,
  };
  let file_path = path_json_encoded("cache", key);
  return file_path;
}
