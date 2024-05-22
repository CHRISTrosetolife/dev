import { object_property_exists } from "./object_property_exists.mjs";
import { not } from "./not.mjs";
export function object_property_exists_not(lookup, right) {
  return not(object_property_exists(lookup, right));
}
