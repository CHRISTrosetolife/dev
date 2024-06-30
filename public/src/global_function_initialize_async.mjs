import { object_property_initialize_get_async } from "./object_property_initialize_get_async.mjs";
import { global_get } from "./global_get.mjs";
export async function global_function_initialize_async(fn, value_get) {
  let g = global_get();
  let counts = await object_property_initialize_get_async(
    g,
    fn.name,
    value_get,
  );
  return counts;
}
