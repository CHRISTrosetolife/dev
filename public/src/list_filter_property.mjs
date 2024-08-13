import { object_property_get } from "./object_property_get.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_property(list, property_name, value) {
  return list_filter(list, (m) =>
    equal(object_property_get(m, property_name), value),
  );
}
