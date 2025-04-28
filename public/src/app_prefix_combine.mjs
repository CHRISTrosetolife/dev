import { app_prefix } from "./app_prefix.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_prefix_combine(name) {
  let v = string_combine_multiple([app_prefix(), name]);
  return v;
}
