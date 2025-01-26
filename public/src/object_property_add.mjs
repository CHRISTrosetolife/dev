import { object_property_set } from "./object_property_set.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function object_property_add(c4, s, value) {
  let v = object_property_initialize(c4, s, 0);
  object_property_set(c4, s, v + value);
}
