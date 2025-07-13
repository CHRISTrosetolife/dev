import { assert } from "./assert.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
export function list_to_lookup_key_value(list, mapper_key, value_mapper) {
  let lookup = {};
  each(list, function (w) {
    let k = mapper_key(w);
    assert(object_property_exists_not, [lookup, k]);
    object_property_set(lookup, k, value_mapper(w, lookup));
  });
  return lookup;
}
