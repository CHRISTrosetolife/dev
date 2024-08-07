import { data_literal_strings } from "./data_literal_strings.mjs";
import { function_names_to_lookup } from "./function_names_to_lookup.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
export async function functions_string(name) {
  assert_arguments_length(arguments, 1);
  let literal_strings = await data_literal_strings();
  if (object_property_exists_not(literal_strings, name)) {
    return [];
  }
  let matches = object_property_get(literal_strings, name);
  return function_names_to_lookup(matches);
}
