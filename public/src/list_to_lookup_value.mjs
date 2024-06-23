import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
export function list_to_lookup_value(list, mapper_key, mapped_value) {
  let lookup = {};
  each(list, (w) => {
    object_property_set(lookup, mapper_key(w), mapped_value(w));
  });
  return lookup;
}
