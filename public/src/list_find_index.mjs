import { list_index } from "./list_index.mjs";
import { list_find } from "./list_find.mjs";
export function list_find_index(keys_lower, predicate) {
  let book_lower = list_find(keys_lower, predicate);
  let index = list_index(keys_lower, book_lower);
  return index;
}
