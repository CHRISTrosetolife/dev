import { object_property_get } from "./object_property_get.mjs";
import { object_map } from "./object_map.mjs";
export function object_map_property(files2, property_name) {
  let v = object_map(files2, function (f) {
    let v2 = object_property_get(f, property_name);
    return v2;
  });
  return v;
}
