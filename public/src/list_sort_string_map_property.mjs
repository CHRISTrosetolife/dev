import { object_property_get } from "./object_property_get.mjs";
import { list_sort_string_map } from "./list_sort_string_map.mjs";
export function list_sort_string_map_property(files, property_name) {
  list_sort_string_map(files, function (f) {
    let v = object_property_get(f, property_name);
    return v;
  });
}
