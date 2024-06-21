import { list_get } from "./list_get.mjs";
import { list_random_index_weighted } from "./list_random_index_weighted.mjs";
export function list_random_item_weighted(weights, items) {
  let index = list_random_index_weighted(weights);
  return list_get(items, index);
}
