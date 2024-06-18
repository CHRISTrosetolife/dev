import { assert } from "./assert.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_is } from "./list_is.mjs";
import { string_combine } from "./string_combine.mjs";
export function string_combine_multiple(list) {
  assert_arguments_length(arguments, 1);
  assert(list_is, [list]);
  let result = "";
  for (let l of list) {
    result = string_combine(result, l);
  }
  return result;
}
