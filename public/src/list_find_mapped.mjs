import { list_get } from "./list_get.mjs";
import { list_find_index } from "./list_find_index.mjs";
import { list_map } from "./list_map.mjs";
export function list_find_mapped(list, mapper, predicate) {
  let keys_lower = list_map(list, mapper);
  let index = list_find_index(keys_lower, predicate);
  let book = list_get(list, index);
  return book;
}
