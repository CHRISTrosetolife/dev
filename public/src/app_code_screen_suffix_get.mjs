import { string_prefix_without } from "./string_prefix_without.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
export function app_code_screen_suffix_get(context, this_fn_name) {
  let prefix = function_name_combine_multiple([
    fn_name("app_code"),
    "refresh",
    "",
  ]);
  let suffix = string_prefix_without(this_fn_name, prefix);
  return suffix;
}
