import { list_index } from "./list_index.mjs";
import { list_find } from "./list_find.mjs";
export function list_find_index(list, predicate) {
  let item = list_find(list, predicate);
  let index = list_index(list, item);
  return index;
}
