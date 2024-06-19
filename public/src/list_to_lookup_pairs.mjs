import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
export function list_to_lookup_pairs(pairs) {
  let lookup = {};
  each(pairs, (s) =>
    object_property_set(lookup, list_first(s), list_second(s)),
  );
  return lookup;
}
