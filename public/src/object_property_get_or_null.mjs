import { object_property_get_or } from "./object_property_get_or.mjs";
export function object_property_get_or_null(attribs, property_name) {
  return object_property_get_or(attribs, property_name, null);
}
