import { object_property_get } from "./object_property_get.mjs";
import { list_to_lookup } from "./list_to_lookup.mjs";
export function list_to_lookup_property(list, property_name) {
  let lookup = list_to_lookup(list, mapper);
  function mapper(w) {
    let v = object_property_get(w, property_name);
    return v;
  }
  return lookup;
}
