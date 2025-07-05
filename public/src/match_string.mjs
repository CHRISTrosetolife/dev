import { object_copy } from "./object_copy.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function match_string(s) {
  let v = function match_string_inner(a) {
    let copy = object_copy(a);
    let input = object_property_get(copy, "input");
    let index = object_property_get(copy, "index");
    return filtered;
  };
  return v;
}
