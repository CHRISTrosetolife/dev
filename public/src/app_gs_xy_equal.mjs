import { equal_by_property } from "./equal_by_property.mjs";
import { list_all } from "./list_all.mjs";
import { list_xy } from "./list_xy.mjs";
export function app_gs_xy_equal(a, b) {
  return list_all(list_xy(), (xy) => equal_by_property(a, b, xy));
}
