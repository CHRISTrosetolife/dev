import { lg_definitions } from "./lg_definitions.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function lg_definition(word) {
  assert_arguments_length(arguments, 1);
  let dictionary = await lg_definitions();
  return object_property_get(dictionary, word);
}
