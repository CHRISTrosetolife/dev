import { file_name_json } from "./file_name_json.mjs";
import { storage_path_function } from "./storage_path_function.mjs";
import { path_join } from "./path_join.mjs";
export function function_result_path(name) {
  let v = path_join([storage_path_function("result"), file_name_json(name)]);
  return v;
}
