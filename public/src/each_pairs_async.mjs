import { add_1 } from "./add_1.mjs";
import { list_get } from "./list_get.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { range } from "./range.mjs";
export function each_pairs_async(list, lambda) {
  let last_index = list_index_last(list);
  for (let i of range(last_index)) {
    let i_next = add_1(i);
    let current = list_get(list, i);
    let next = list_get(list, i_next);
    lambda(current, next);
  }
}
