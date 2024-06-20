import { object_property_initialize } from "./object_property_initialize.mjs";
import { global_get } from "./global_get.mjs";
export function global_function_initialize(fn, value) {
  let g = global_get();
  let counts = object_property_initialize(g, fn.name, value);
  return counts;
}
