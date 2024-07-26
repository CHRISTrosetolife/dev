import { object_property_initialize } from "./object_property_initialize.mjs";
import { list_add } from "./list_add.mjs";
export function object_property_initialize_list_add(lookup, r1, r2) {
  list_add(object_property_initialize(lookup, r1, []), r2);
}
