import { list_size_1 } from "./list_size_1.mjs";
import { assert } from "./assert.mjs";
import { list_first } from "./list_first.mjs";
export function list_single(list) {
  assert(list_size_1, [list]);
  return list_first(list);
}
