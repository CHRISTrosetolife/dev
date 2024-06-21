import { object_property_get } from "./object_property_get.mjs";
import { list_all } from "./list_all.mjs";
import { list_xy } from "./list_xy.mjs";
import { object_properties_new } from "./object_properties_new.mjs";
import { equal_by } from "./equal_by.mjs";
export function app_gs_xy_equal(o, tile) {
  list_all(list_xy(), (xy) =>
    equal_by(map.player, tile, (coordinates) =>
      object_property_get(coordinates, xy),
    ),
  );
  return equal_by(o, tile, (a) => object_properties_new(a, list_xy()));
}
