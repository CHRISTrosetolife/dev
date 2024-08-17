import { list_single } from "./list_single.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_find_last(list, predicate) {
  let filtered = list_filter(list, predicate);
  let s = list_single(filtered);
  return s;
}
