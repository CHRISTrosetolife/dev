import { add_1 } from "./add_1.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function string_count_lookup(input_list) {
  let lookup = {};
  for (let word of input_list) {
    let count = object_property_initialize(lookup, word, 0);
    object_property_set(lookup, word, add_1(count));
  }
  return lookup;
}
