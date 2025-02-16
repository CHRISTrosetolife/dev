import { app_code_file_name_latest } from "./app_code_file_name_latest.mjs";
import { app_code_local_files_path } from "./app_code_local_files_path.mjs";
export function app_code_local_files_path_latest() {
  let v = app_code_local_files_path(app_code_file_name_latest());
  return v;
}
