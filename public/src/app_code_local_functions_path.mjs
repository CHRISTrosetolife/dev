import { app_code_repo_name } from "./app_code_repo_name.mjs";
import { path_join } from "./path_join.mjs";
export function app_code_local_functions_path(batch_name) {
  return path_join(["code", "local", app_code_repo_name(), batch_name]);
}
