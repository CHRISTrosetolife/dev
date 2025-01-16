import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
export function object_properties_select(properties, c) {
  return list_map(properties, (p) => object_property_get(c, p));
}
