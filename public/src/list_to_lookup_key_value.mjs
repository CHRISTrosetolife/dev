import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
export function list_to_lookup_key_value(list, mapper_key, value_mapper) {
  let lookup = {};
  each(list, function (w) {
    object_property_set(lookup, mapper_key(w), value_mapper(w, lookup));
  });
  return lookup;
}
