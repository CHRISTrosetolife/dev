import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
export async function object_property_get_or_async(
  n,
  property_name,
  default_value_get,
) {
  let result;
  if (object_property_exists_not(n, property_name)) {
    result = await default_value_get();
  } else {
    result = object_property_get(n, property_name);
  }
  return result;
}
