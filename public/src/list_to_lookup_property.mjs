import { list_to_lookup } from "./list_to_lookup.mjs";
export function list_to_lookup_property(ceb_scores, property_name) {
  let lookup = list_to_lookup(ceb_scores, mapper);
  function mapper(w) {
    return w[property_name];
  }
  return lookup;
}
