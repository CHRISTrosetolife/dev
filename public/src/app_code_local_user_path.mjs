import { path_join } from "./path_join.mjs";
export function app_code_local_user_path(username, batch_name) {
  let v = path_join(["code", "user", username, batch_name]);
  return v;
}
