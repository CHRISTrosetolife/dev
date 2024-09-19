import { list_find } from "./list_find.mjs";
import { list_find_index } from "./list_find_index.mjs";
import { list_map } from "./list_map.mjs";
export function list_find_mapped(mapper, book_prefix, predicate, keys) {
  let keys_lower = list_map(matches, mapper);
  book_prefix = mapper(book_prefix);
  let index = list_find_index(keys_lower, predicate);
  let book = list_find(keys, index);
  return book;
}
