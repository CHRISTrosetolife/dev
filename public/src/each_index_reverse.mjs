import { list_index_first } from "./list_index_first.mjs";
import { list_get } from "./list_get.mjs";
import { list_index_last } from "./list_index_last.mjs";
export function each_index_reverse(list, lambda) {
  let index_last = list_index_last(list);
  for (let i = index_last; i >= list_index_first(); i--) {
    let element = list_get(list, i);
    lambda(element);
  }
}
