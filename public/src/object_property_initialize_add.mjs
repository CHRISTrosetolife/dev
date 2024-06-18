import { add } from "./add.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function object_property_initialize_add(totals, i, d) {
  let existing = object_property_initialize(totals, i, 0);
  object_property_set(totals, i, add(existing, d));
}
