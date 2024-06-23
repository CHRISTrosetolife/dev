import { list_to_lookup } from "./list_to_lookup.mjs";
export function list_to_lookup_property(list, property_name) {
  let lookup = list_to_lookup(list, mapper);
  function mapper(w) {
    return w[property_name];
  }
  return lookup;
}
