import { assert } from "./assert.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_is } from "./list_is.mjs";
export function list_length(list) {
  assert_arguments_length(arguments, 1);
  assert(list_is, [list]);
  return list.length;
}
