import { git_repo_name } from "./git_repo_name.mjs";
import { path_join } from "./path_join.mjs";
export function app_code_local_user_path(batch_name) {
  let v = path_join(["code", "local", git_repo_name(), batch_name]);
  return v;
}
