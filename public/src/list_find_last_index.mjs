import { list_index } from "./list_index.mjs";
import { list_find_last } from "./list_find_last.mjs";
export function list_find_last_index(list, predicate) {
  let last = list_find_last(list, predicate);
  let v = list_index(list, last);
  return v;
}
