import { assert } from "./assert.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function object_property_get(object, property_name) {
  assert(object_property_exists(object, property_name));
  return object[property_name];
}
