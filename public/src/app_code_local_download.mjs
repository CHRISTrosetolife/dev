import { app_code_file_name_latest } from "./app_code_file_name_latest.mjs";
import { app_code_local_user_path } from "./app_code_local_user_path.mjs";
export function app_code_local_download(username) {
  app_code_file_name_latest();
  app_code_local_user_path(username);
}
