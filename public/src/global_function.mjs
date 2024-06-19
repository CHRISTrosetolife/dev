import { object_property_initialize } from "./object_property_initialize.mjs";
import { global_get } from "./global_get.mjs";
export function global_function(fn) {
  let g = global_get();
  let counts = object_property_initialize(g, fn.name, {});
  return counts;
}
