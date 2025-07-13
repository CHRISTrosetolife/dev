import { object_property_get_or_async } from "./object_property_get_or_async.mjs";
import { global_function } from "./global_function.mjs";
export async function global_function_property_async(
  app_fn,
  property_name,
  value_get,
) {
  let a = global_function(app_fn);
  let result = await object_property_get_or_async(a, property_name, value_get);
  return result;
}
