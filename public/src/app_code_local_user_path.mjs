import { app_code } from "./app_code.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { path_join } from "./path_join.mjs";
export function app_code_local_user_path(batch_name) {
  let username = storage_local_set(app_code, "username");
  let v = path_join(["code", "user", username, batch_name]);
  return v;
}
