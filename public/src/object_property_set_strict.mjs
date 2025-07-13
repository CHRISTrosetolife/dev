import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { assert } from "./assert.mjs";
export function object_property_set_strict(lookup, k, v) {
  assert(object_property_exists_not, [lookup, k]);
  object_property_set(lookup, k, v);
}
