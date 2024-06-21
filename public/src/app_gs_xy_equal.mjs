import { object_property_get } from "./object_property_get.mjs";
import { list_all } from "./list_all.mjs";
import { list_xy } from "./list_xy.mjs";
import { equal_by } from "./equal_by.mjs";
export function app_gs_xy_equal(a, b) {
  return list_all(list_xy(), (xy) =>
    equal_by(a, b, (coordinates) => object_property_get(coordinates, xy)),
  );
}
