import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function object_merge_properties(from_properties, from, to) {
  for (let p of from_properties) {
    let value = object_property_get(from, p);
    object_property_set(to, p, value);
  }
}
