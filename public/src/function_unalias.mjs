import { function_aliases } from "./function_aliases.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function function_unalias(first) {
  return first;
  let aliases = function_aliases();
  if (object_property_exists(aliases, first)) {
    first = object_property_get(aliases, first);
  }
  return first;
}
