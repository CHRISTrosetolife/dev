import { assert } from "./assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function list_remove_last(list) {
  assert(list_empty_not_is, [list]);
  return list.pop();
}
