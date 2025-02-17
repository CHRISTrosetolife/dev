import { storage_local_get } from "./storage_local_get.mjs";
import { app_code_local_user_path } from "./app_code_local_user_path.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_code_local_user_path_web(context, file_name) {
  let app_fn = object_property_get(context, "app_fn");
  let username = storage_local_get(app_fn, "username");
  let v = app_code_local_user_path(username, file_name);
  return v;
}
