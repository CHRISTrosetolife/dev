import { object_property_get } from "./object_property_get.mjs";
import { list_find_property_next } from "./list_find_property_next.mjs";
export function list_find_property_next_property(
  list,
  property_name,
  target_value,
) {
  let verse_next = list_find_property_next(list, property_name, target_value);
  let verse_number_next = object_property_get(verse_next, property_name);
  return verse_number_next;
}
