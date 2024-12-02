import { file_name_json } from "./file_name_json.mjs";
import { path_join } from "./path_join.mjs";
export function function_deploy_path_version(name) {
  return path_join(["function", name, file_name_json("version")]);
}
