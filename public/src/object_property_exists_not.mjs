import { object_property_exists } from "./object_property_exists.mjs";
import { not } from "./not.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function object_property_exists_not(lookup, right) {
  assert_arguments_length(arguments, 2);
  return not(object_property_exists(lookup, right));
}
