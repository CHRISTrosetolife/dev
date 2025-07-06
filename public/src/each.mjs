import { assert } from "./assert.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_is } from "./list_is.mjs";
export function each(list, lambda) {
  assert_arguments_length(arguments, 2);
  assert(list_is, [list]);
  for (let item of list) {
    if (lambda(item) === true) {
      return;
    }
  }
}
