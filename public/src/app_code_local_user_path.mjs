import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { path_join } from "./path_join.mjs";
export function app_code_local_user_path(username, file_name) {$e
  assert(string_is, [username]);
  let v = path_join(["code", "user", username, file_name]);
  return v;
}
