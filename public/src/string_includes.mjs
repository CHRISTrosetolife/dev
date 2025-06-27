import { never } from "./never.mjs";
import { assert } from "./assert.mjs";
export function string_includes(string, value) {
  assert(never, []);
  let v = string.includes(value);
  return v;
}
