import { storage_path_function } from "./storage_path_function.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { path_join } from "./path_join.mjs";
export function function_result_path(name) {
  let v = path_join([storage_path_function("result"), file_name_js(name)]);
  return v;
}
