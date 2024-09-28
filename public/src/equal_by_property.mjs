import { object_property_get } from "./object_property_get.mjs";
import { equal_by } from "./equal_by.mjs";
export function equal_by_property(a, b, property_name) {
  return equal_by(a, b, (ab) => object_property_get(ab, property_name));
}
