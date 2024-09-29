import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_first } from "./list_first.mjs";
export function app_todo_choices_initialize(item, property) {
  assert_arguments_length(arguments, 2);
  let property_name = object_property_get(property, "name");
  let choices = object_property_get(property, "choices");
  let choice_default = list_first(choices);
  if (!object_property_exists(item, property_name)) {
    object_property_set(item, property_name, choice_default);
  }
}
