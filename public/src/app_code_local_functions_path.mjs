import { uuid } from "./uuid.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { app_code_repo_name } from "./app_code_repo_name.mjs";
import { path_join } from "./path_join.mjs";
export async function app_code_local_functions_path() {
  let batch_name = path_join([
    "batch",
    date_string_iso_file(),
    await uuid(),
    ".json",
  ]);
  return path_join(["code", "local", app_code_repo_name(), batch_name]);
}
