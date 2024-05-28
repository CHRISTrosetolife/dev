import { string_prefix_without } from "./string_prefix_without.mjs";
export function app_name(app_function) {
  let prefix = "app_";
  return string_prefix_without(app_function.name, prefix);
}
