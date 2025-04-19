import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { path_join } from "./path_join.mjs";
export function tampermonkey_update(name) {
  let id = "tampermonkey";
  let combined = function_name_combine(id, name);
  let output_path = path_join([id, string_combine_multiple([name])]);
}
