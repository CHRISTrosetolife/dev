import { list_size } from "./list_size.mjs";
import { assert } from "./assert.mjs";
import { number_less_than } from "./number_less_than.mjs";
export function list_get(list, index) {
  assert(number_less_than, [index, list_size(list)]);
  return list[index];
}
