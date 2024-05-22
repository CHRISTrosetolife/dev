import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function object_property_initialize(lookup, key, initial) {
  if (object_property_exists_not(lookup, key)) {
    object_property_set(lookup, key, initial);
  }
  return object_property_get(lookup, key);
}
