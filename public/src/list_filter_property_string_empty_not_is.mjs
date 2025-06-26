import { object_property_string_empty_not_is } from "./object_property_string_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_property_string_empty_not_is(list, property_name) {
  let filtered = list_filter(list, function (item) {
    let v2 = object_property_string_empty_not_is(item, property_name);
    return v2;
  });
  return filtered;
}
