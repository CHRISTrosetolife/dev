import { object_property_get } from "./object_property_get.mjs";
import { list_find_property_next } from "./list_find_property_next.mjs";
export function list_find_property_next_property(
  list,
  property_name,
  target_value,
) {
  let next_item = list_find_property_next(list, property_name, target_value);
  let value = object_property_get(next_item, property_name);
  return value;
}
