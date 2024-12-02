import { app_prefix } from "./app_prefix.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function function_deploy(name) {
  let name_prefixed = string_combine_multiple([app_prefix(), name]);
}
