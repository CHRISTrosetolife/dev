import { object_property_get } from "./object_property_get.mjs";
import { global_function } from "./global_function.mjs";
export function global_function_property(fn, property_name) {
  let a = global_function(fn);
  let result = object_property_get(a, property_name);
  return result;
}
