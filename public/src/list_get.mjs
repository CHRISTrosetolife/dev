import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { assert } from "./assert.mjs";
export function list_get(list, index) {
  assert(less_than, [index, list_size(list)]);
  return list[index];
}
