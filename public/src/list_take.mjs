import { assert } from "./assert.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_size } from "./list_size.mjs";
export function list_take(list, count) {
  assert(greater_than_equal, [count, list_size(list)]);
  return list.slice(0, count);
}
