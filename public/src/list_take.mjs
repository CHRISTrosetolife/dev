import { list_take_soft } from "./list_take_soft.mjs";
import { assert } from "./assert.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_size } from "./list_size.mjs";
export function list_take(list, count) {
  assert(less_than_equal, [count, list_size(list)]);
  return list_take_soft(list, count);
}
