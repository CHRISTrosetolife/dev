import { function_aliases_generate } from "./function_aliases_generate.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function function_alias_expand(alias) {
  return object_property_get(function_aliases_generate(), alias);
}
