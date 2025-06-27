import { assert } from "./assert.mjs";
import { string_is } from "./string_is.mjs";
export function string_includes(string, value) {
  assert(string_is, [string]);
  let v = string.includes(value);
  return v;
}
