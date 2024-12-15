import { list_map_property } from "./list_map_property.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function js_identifiers_names(args) {
  return list_map_property(args, (a) => object_property_get(a, "name"));
}
