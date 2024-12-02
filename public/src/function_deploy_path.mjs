import { file_name_js } from "./file_name_js.mjs";
import { path_join } from "./path_join.mjs";
export function function_deploy_path(name, version) {
  return path_join(["function", name, file_name_js(version)]);
}
