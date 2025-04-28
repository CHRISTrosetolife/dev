import { string_prefix_without } from "./string_prefix_without.mjs";
import { app_prefix } from "./app_prefix.mjs";
export function app_name_string(app_name_prefixed) {
  let prefix = app_prefix();
  let v = string_prefix_without(app_name_prefixed, prefix);
  return v;
}
