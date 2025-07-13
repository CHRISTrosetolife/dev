import { object_property_set_strict } from "./object_property_set_strict.mjs";
import { each } from "./each.mjs";
export function list_to_lookup_key_value(list, mapper_key, value_mapper) {
  let lookup = {};
  each(list, function (w) {
    let k = mapper_key(w);
    let v = value_mapper(w, lookup);
    object_property_set_strict(lookup, k, v);
  });
  return lookup;
}
