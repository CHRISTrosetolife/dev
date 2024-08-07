import { range } from "./range.mjs";
import { true_is } from "./true_is.mjs";
import { assert } from "./assert.mjs";
import { lists_sizes_equal } from "./lists_sizes_equal.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_get } from "./list_get.mjs";
export function list_zip(lists) {
  let same_sizes = lists_sizes_equal(lists);
  assert(true_is, [same_sizes]);
  return list_map(range(list_size(list_first(lists))), (index) => {
    let item = list_map(lists, (list) => list_get(list, index));
    return item;
  });
}
