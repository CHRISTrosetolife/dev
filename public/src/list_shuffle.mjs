import { list_shuffle_from } from "./list_shuffle_from.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function list_shuffle(list) {
  if (list_empty_is(list)) {
    return;
  }
  let low = 0;
  let high = list_index_last(list);
  list_shuffle_from(low, high, list);
}
