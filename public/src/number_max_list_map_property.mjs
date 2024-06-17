import { object_property_get } from "./object_property_get.mjs";
import { number_max_list_map } from "./number_max_list_map.mjs";
export function number_max_list_map_property(definitions, property) {
  return number_max_list_map(definitions, (d) =>
    object_property_get(d, property),
  );
}
