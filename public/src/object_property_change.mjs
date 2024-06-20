import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function object_property_change(object, property_name, change) {
  let existing = object_property_get(object, property_name);
  let changed = change(existing);
  object_property_set(object, changed);
}
