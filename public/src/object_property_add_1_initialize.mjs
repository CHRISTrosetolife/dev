import { object_property_add_1 } from "./object_property_add_1.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function object_property_add_1_initialize(counts, f_name_item) {
  object_property_initialize(counts, f_name_item, 0);
  return object_property_add_1(counts, f_name_item);
}
