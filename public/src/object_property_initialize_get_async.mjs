import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function object_property_initialize_get_async(
  object,
  key,
  initial,
) {
  if (object_property_exists_not(object, key)) {
    object_property_set(object, key, await initial());
  }
  return object_property_get(object, key);
}
