import { each } from "./each.mjs";
import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { path_join } from "./path_join.mjs";
export function app_code_local_user_path(username, file_name) {
  each([username, file_name], function (s) {
    assert(string_is, [s]);
  });
  let v = path_join(["code", "user", username, file_name]);
  return v;
}
