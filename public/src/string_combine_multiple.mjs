import { assert } from "./assert.mjs";
import { list_is } from "./list_is.mjs";
import { string_combine } from "./string_combine.mjs";
export function string_combine_multiple(list) {
  assert(list_is, [list]);
  let result = "";
  for (let l of list) {
    result = string_combine(result, l);
  }
  return result;
}
