import { file_name_json } from "./file_name_json.mjs";
import { storage_path_function } from "./storage_path_function.mjs";
import { path_join } from "./path_join.mjs";
export function function_result_path(f_name) {
  let v = path_join([storage_path_function("deploy"), file_name_json(f_name)]);
  return v;
}
