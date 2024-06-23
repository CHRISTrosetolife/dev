import { object_property_get } from "./object_property_get.mjs";
import { data_identifiers } from "./data_identifiers.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function functions_identifier(name) {
  assert_arguments_length(arguments, 1);
  let ids = await data_identifiers();
  return object_property_get(ids, name);
}
