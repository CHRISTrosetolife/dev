import { function_aliases } from "./function_aliases.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function function_alias_expand(alias) {
  return object_property_get(function_aliases(), alias);
}
