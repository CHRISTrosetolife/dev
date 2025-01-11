import { object_property_initialize_get } from "./object_property_initialize_get.mjs";
import { global_get } from "./global_get.mjs";
export function global_function_initialize(fn, value_get) {
  let g = global_get();
  let result = object_property_initialize_get(g, fn.name, value_get);
  return result;
}
