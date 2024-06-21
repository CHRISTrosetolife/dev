import { list_xy } from "./list_xy.mjs";
import { object_properties_new } from "./object_properties_new.mjs";
import { equal_by } from "./equal_by.mjs";
export function app_gs_xy_equal(o, tile) {
  return equal_by(o, tile, (a) => object_properties_new(a, list_xy()));
}
