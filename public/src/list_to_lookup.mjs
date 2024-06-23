import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
export function list_to_lookup(ceb_scores, mapper_key) {
  let lookup = {};
  each(ceb_scores, (w) => {
    object_property_set(lookup, mapper_key(w), w);
  });
  return lookup;
}
