import { list_intersect } from "./list_intersect.mjs";
import { object_properties } from "./object_properties.mjs";
export function object_properties_intersect(a, b) {
  let a_keys = object_properties(a);
  let b_keys = object_properties(b);
  return list_intersect(a_keys, b_keys);
}
