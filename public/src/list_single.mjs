import { assert } from "./assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_length_1 } from "./list_length_1.mjs";
export function list_single(list) {
  assert(list_length_1, [list]);
  return list_first(list);
}
