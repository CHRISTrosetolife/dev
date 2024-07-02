import { assert } from "./assert.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_size } from "./list_size.mjs";
export function list_index_last(list) {
  let length = list_size(list);
  let index_last = length - 1;
  assert(greater_than_equal, [index_last, 0]);
  return index_last;
}
