import { list_get } from "./list_get.mjs";
import { list_find_property_index_next } from "./list_find_property_index_next.mjs";
export function list_find_property_next(list, property_name, target_value) {
  let next = list_find_property_index_next(list, property_name, target_value);
  let verse_next = list_get(next);
  return verse_next;
}
