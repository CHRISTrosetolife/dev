import { global_function } from "./global_function.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function global_function_property_initialize(
  fn,
  property_name,
  initial,
) {
  let a = global_function(fn);
  let result = object_property_initialize(a, property_name, initial);
  return result;
}
