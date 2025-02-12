import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function object_property_toggle(toggled, name) {
  object_property_set(toggled, name, !object_property_get(toggled, name));
}
