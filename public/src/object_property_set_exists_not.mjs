import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { assert } from "./assert.mjs";
export function object_property_set_exists_not(property_name, object, value) {
  assert(object_property_exists_not, property_name);
  object_property_set(object, property_name, value);
}
