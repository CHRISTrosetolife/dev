import { list_index } from "./list_index.mjs";
import { list_find_last } from "./list_find_last.mjs";
export function list_find_last_index(stack, predicate) {
  let last = list_find_last(stack, predicate);
  list_index(stack, last);
  return last;
}
