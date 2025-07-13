import { object_property_get_or } from "./object_property_get_or.mjs";
import { global_function } from "./global_function.mjs";
export function global_function_property_or(fn, property_name, value_get) {
  let a = global_function(fn);
  let result = object_property_get_or(a, property_name, value_get);
  return result;
}
