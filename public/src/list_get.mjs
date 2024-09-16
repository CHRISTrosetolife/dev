import { list_index_is } from "./list_index_is.mjs";
import { assert } from "./assert.mjs";
export function list_get(list, index) {
  assert(list_index_is, [list, index]);
  return list[index];
}
