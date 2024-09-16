import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { assert } from "./assert.mjs";
export function list_get(list, index) {
  greater_than_equal(index, 0) && less_than(index, list_size(list));
  assert(greater_than_equal, [index, 0]);
  assert(less_than, [index, list_size(list)]);
  return list[index];
}
