import { equal_by_property_multiple } from "./equal_by_property_multiple.mjs";
import { list_xy } from "./list_xy.mjs";
export function app_gs_xy_equal(a, b) {
  let properties = list_xy();
  return equal_by_property_multiple(properties, a, b);
}
