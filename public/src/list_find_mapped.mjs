import { list_find } from "./list_find.mjs";
import { list_find_index } from "./list_find_index.mjs";
import { list_map } from "./list_map.mjs";
export function list_find_mapped(list, predicate, mapper, target_mapped) {
  let keys_lower = list_map(matches, mapper);
  target_mapped = mapper(target_mapped);
  let index = list_find_index(keys_lower, predicate);
  let book = list_find(list, index);
  return book;
}
