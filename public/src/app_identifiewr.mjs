import { string_combine } from "./string_combine.mjs";
import { app_prefix } from "./app_prefix.mjs";
export function app_identifiewr(name) {
  let prefix = app_prefix();
  let name_prefixed = string_combine(prefix, name);
  return name_prefixed;
}
