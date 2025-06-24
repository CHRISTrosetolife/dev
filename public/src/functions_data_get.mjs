import { function_names_to_lookup } from "./function_names_to_lookup.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export async function functions_data_get(data_get_fn, name) {
  let literal_strings = await data_get_fn();
  let result = [];
  if (object_property_exists(literal_strings, name)) {
    let matches = object_property_get(literal_strings, name);
    result = function_names_to_lookup(matches);
  }
  return result;
}
