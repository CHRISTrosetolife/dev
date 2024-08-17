import { list_last } from "./list_last.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_find_last(list, predicate) {
  let filtered = list_filter(list, predicate);
  let s = list_last(filtered);
  return s;
}
