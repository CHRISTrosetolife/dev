import { path_join } from "./path_join.mjs";
export function app_code_local_user_path(batch_name) {
  let v = path_join(["code", "user", , batch_name]);
  return v;
}
