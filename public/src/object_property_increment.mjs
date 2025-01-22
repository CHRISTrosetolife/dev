import { add_1 } from "./add_1.mjs";
import { object_property_change } from "./object_property_change.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function object_property_increment(right, closest) {
  object_property_initialize(right, closest, 0);
  object_property_change(right, closest, add_1);
}
