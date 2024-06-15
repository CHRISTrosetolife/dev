import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function object_merge_properties(from, to, properties) {
  for (let p of properties) {
    let value = object_property_get(from, p);
    object_property_set(to, p, value);
  }
}
