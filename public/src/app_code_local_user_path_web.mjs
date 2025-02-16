import { object_property_get } from "./object_property_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { path_join } from "./path_join.mjs";
export function app_code_local_user_path_web(context, batch_name) {
  let app_fn = object_property_get(context, "app_fn");
  let username = storage_local_set(app_fn, "username");
  let v = path_join(["code", "user", username, batch_name]);
  return v;
}
