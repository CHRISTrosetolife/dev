import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
export function js_identifiers_names(args) {
  return list_map(args, (a) => object_property_get(a, "name"));
}
