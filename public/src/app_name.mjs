import { app_prefix } from "./app_prefix.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export function app_name(app_function) {
  let prefix = app_prefix();
  let v = string_prefix_without(app_function.name, prefix);
  return v;
}
