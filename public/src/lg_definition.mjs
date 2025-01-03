import { lg_definitions_cache } from "./lg_definitions_cache.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function lg_definition(word) {
  assert_arguments_length(arguments, 1);
  let dictionary = await lg_definitions_cache();
  let definitions;
  if (object_property_exists(dictionary, word)) {
    definitions = object_property_get(dictionary, word);
  } else {
    definitions = [];
  }
  return {
    word,
    definitions,
  };
}
