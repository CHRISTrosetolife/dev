import { assert } from "./assert.mjs";
import { equal_by } from "./equal_by.mjs";
import { list_get } from "./list_get.mjs";
import { list_random_index_weighted } from "./list_random_index_weighted.mjs";
import { list_size } from "./list_size.mjs";
export function list_random_item_weighted(weights, items) {
  assert(equal_by, [weights, items, list_size]);
  let index = list_random_index_weighted(weights);
  return list_get(items, index);
}
