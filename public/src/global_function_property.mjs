import { object_property_get_or } from "./object_property_get_or.mjs";
import { global_function } from "./global_function.mjs";
export async function global_function_property(
  app_fn,
  property_name,
  value_get,
) {
  let a = global_function(app_fn);
  let result = object_property_get_or(a, property_name, value_get);
  return result;
}
