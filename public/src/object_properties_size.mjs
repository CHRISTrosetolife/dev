import { object_properties } from "./object_properties.mjs";
import { list_size } from "./list_size.mjs";
export function object_properties_size(words) {
  return list_size(object_properties(words));
}
