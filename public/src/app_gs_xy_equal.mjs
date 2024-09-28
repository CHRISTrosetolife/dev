import { equal_by_property_multiple } from "./equal_by_property_multiple.mjs";
import { list_xy } from "./list_xy.mjs";
export function app_gs_xy_equal(a, b) {
  return equal_by_property_multiple(list_xy(), a, b);
}
