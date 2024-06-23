import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
import { identity } from "./identity.mjs";
export function list_to_lookup(list, mapper_key) {
  let mapped_value = identity;
  let lookup = {};
  each(list, (w) => {
    object_property_set(lookup, mapper_key(w), w);
  });
  return lookup;
}
