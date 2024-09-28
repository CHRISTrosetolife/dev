import { equal_by_property } from "./equal_by_property.mjs";
import { list_all } from "./list_all.mjs";
export function equal_by_property_multiple(properties, a, b) {
  return list_all(properties, (xy) => equal_by_property(a, b, xy));
}
