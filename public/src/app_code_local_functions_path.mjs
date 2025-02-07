import { date_string_iso_file_short } from "./date_string_iso_file_short.mjs";
import { app_code_repo_name } from "./app_code_repo_name.mjs";
import { path_join } from "./path_join.mjs";
export function app_code_local_functions_path() {
  let d = date_string_iso_file_short();
  return path_join([
    "code",
    "local",
    app_code_repo_name(),
    "batch",
    d,
    ".json",
  ]);
}
