import { app_prefix } from "./app_prefix.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export function app_name(app_function) {
  let app_name_prefixed = app_function.name;
  let prefix = app_prefix();
  let v = string_prefix_without(app_name_prefixed, prefix);
  return v;
}
