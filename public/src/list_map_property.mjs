import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_property(list, property_name) {
  return list_map(list, (l) => object_property_get(l, property_name));
}
