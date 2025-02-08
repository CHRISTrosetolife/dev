import { file_name_json } from "./file_name_json.mjs";
import { app_code_local_files_path } from "./app_code_local_files_path.mjs";
export function app_code_local_files_path_latest() {
  return app_code_local_files_path(file_name_json("latest"));
}
