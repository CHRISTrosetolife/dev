import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { assert } from "./assert.mjs";
export function object_property_set_exists_not(
  property_name,
  input_username,
  lambda,
) {
  assert(object_property_exists_not, property_name);
  object_property_set(input_username, property_name, lambda);
}
