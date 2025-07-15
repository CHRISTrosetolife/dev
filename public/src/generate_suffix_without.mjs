import { string_suffix_without } from "./string_suffix_without.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function generate_suffix_without(fn) {
  let suffix = "_generate";
  let f_name = object_property_get(fn, "name");
  let name = string_suffix_without(f_name, suffix);
  return name;
}
