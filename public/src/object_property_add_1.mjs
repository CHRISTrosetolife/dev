import { add_1 } from "./add_1.mjs";
import { object_property_change } from "./object_property_change.mjs";
export function object_property_add_1(counts, f_name_item) {
  return object_property_change(counts, f_name_item, add_1);
}
