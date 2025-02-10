import { add_1 } from "./add_1.mjs";
import { object_property_change } from "./object_property_change.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function object_property_increment(object, property_name) {
  object_property_initialize(object, property_name, 0);
  object_property_change(object, property_name, add_1);
}
