import { object_property_initialize_get } from "./object_property_initialize_get.mjs";
export function object_property_initialize(object, key, initial) {
  return object_property_initialize_get(object, key, () => initial);
}
