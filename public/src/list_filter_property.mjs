import { object_property_get } from "./object_property_get.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_property(mapped4, property_name, word) {
  return list_filter(mapped4, (m) =>
    equal(object_property_get(m, property_name), word),
  );
}
