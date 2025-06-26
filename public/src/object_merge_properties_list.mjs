import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function object_merge_properties_list(properties, from, to) {
  assert_arguments_length(arguments, 3);
  each(properties, function (p) {
    let value = object_property_get(from, p);
    let existing = object_property_initialize(to, p, []);
    object_property_set(to, p, value);
  });
  return to;
}
