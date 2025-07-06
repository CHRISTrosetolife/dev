import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { string_split } from "./string_split.mjs";
import { list_join } from "./list_join.mjs";
export function string_replace(input, from, to) {
  assert(string_is, [input]);
  let split = string_split(input, from);
  let joined = list_join(split, to);
  return joined;
}
