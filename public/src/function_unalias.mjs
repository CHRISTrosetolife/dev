import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { function_aliases_generate } from "./function_aliases_generate.mjs";
export async function function_unalias(first) {
  let aliases = await function_aliases_generate();
  if (object_property_exists(aliases, first)) {
    first = object_property_get(aliases, first);
  }
  return first;
}
