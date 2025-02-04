import { app_code_screen_prefix_get } from "./app_code_screen_prefix_get.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export function app_code_screen_suffix_get(context, this_fn_name) {
  let prefix = app_code_screen_prefix_get(context);
  let suffix = string_prefix_without(this_fn_name, prefix);
  return suffix;
}
