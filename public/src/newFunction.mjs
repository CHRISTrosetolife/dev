import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
export function newFunction(ceb_scores, mapper) {
  let lookup = {};
  each(ceb_scores, (w) => {
    object_property_set(lookup, mapper(w), w);
  });
  return lookup;
}
