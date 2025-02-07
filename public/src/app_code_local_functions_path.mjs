import { app_code_batch_name } from "./app_code_batch_name.mjs";
import { app_code_repo_name } from "./app_code_repo_name.mjs";
import { path_join } from "./path_join.mjs";
export async function app_code_local_functions_path() {
  let batch_name = await app_code_batch_name();
  return path_join(["code", "local", app_code_repo_name(), batch_name]);
}
