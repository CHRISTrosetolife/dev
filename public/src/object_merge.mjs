import { object_properties } from "./object_properties.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function object_merge(to, from) {
  let from_properties = object_properties(from);
  for (let p of from_properties) {
    let value = object_property_get(from, p);
    object_property_set(to, p, value);
  }
  return to;
}
