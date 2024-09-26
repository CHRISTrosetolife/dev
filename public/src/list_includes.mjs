import { list_is } from "./list_is.mjs";
import { assert } from "./assert.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function list_includes(list, item) {
  assert_arguments_length(arguments, 2);
  assert(list_is, [list]);
  return list.includes(item);
}
