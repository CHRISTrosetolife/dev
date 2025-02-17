import { app_code_username_get } from "./app_code_username_get.mjs";
import { app_code_local_user_path } from "./app_code_local_user_path.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_code_local_user_path_web(context, file_name) {
  let username = app_code_username_get(context);
  let v = app_code_local_user_path(username, file_name);
  return v;
}
