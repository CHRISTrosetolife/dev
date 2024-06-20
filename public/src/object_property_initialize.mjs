import { object_property_initialize_get } from "./object_property_initialize_get.mjs";
export function object_property_initialize(lookup, key, initial) {
  return object_property_initialize_get(lookup, key, () => initial);
}
