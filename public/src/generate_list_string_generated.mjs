import { generate_list_string } from "./generate_list_string.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function generate_list_string_generated(fn, list) {
  let suffix = "_generate";
  let f_name = object_property_get(fn, "name");
  let name = string_suffix_without(f_name, suffix);
  await generate_list_string(list, name);
}
