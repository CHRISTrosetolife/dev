import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export async function functions_data_get_list(data_get_fn, name) {
  let literal_strings = await data_get_fn();
  let matches = [];
  if (object_property_exists(literal_strings, name)) {
    matches = object_property_get(literal_strings, name);
  }
  return matches;
}
