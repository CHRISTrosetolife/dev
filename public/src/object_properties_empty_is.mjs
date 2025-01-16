import { object_properties } from "./object_properties.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function object_properties_empty_is(o) {
  return list_empty_is(object_properties(o));
}
