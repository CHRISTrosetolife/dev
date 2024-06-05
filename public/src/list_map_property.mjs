import { object_property_get_curry } from "./object_property_get_curry.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_property(list, property_name) {
  return list_map(list, object_property_get_curry(property_name));
}
