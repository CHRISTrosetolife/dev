import { string_starts_with_not } from "./string_starts_with_not.mjs";
import { assert } from "./assert.mjs";
import { string_combine } from "./string_combine.mjs";
import { app_prefix } from "./app_prefix.mjs";
export function app_identifier(name) {
  let prefix = app_prefix();$i
  assert(string_starts_with_not, [name, prefix]);
  let name_prefixed = string_combine(prefix, name);
  return name_prefixed;
}
