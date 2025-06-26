import { each_object } from "./each_object.mjs";
import { list_add } from "./list_add.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function object_merge_list(from, to) {
  assert_arguments_length(arguments, 2);
  each_object(from, function (key, value) {
    let existing = object_property_initialize(to, key, []);
    list_add(existing, value);
  });
  return to;
}
