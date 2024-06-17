import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function object_merge_properties(to, from, properties) {
  assert_arguments_length(arguments, 3);
  for (let p of properties) {
    let value = object_property_get(from, p);
    object_property_set(to, p, value);
  }
  return to;
}
