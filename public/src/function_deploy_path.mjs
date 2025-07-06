import { storage_path_function } from "./storage_path_function.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { path_join } from "./path_join.mjs";
export function function_deploy_path(name, version) {
  let folder = "deploy";
  let v = path_join([
    storage_path_function(folder),
    name,
    file_name_js(version),
  ]);
  return v;
}
