import { object_property_get } from "./object_property_get.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function set_size(list) {
  assert_arguments_length(arguments, 1);
  return object_property_get(object, "property_name");
}
