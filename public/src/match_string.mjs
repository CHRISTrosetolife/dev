import { object_property_set } from "./object_property_set.mjs";
import { object_property_increment } from "./object_property_increment.mjs";
import { list_get } from "./list_get.mjs";
import { object_copy } from "./object_copy.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
export function match_string(s) {
  let v = function match_string_inner(a) {
    let v3 = list_map(a, $a$ai);
    return v3;
    let copy = object_copy(a);
    let tokens = object_property_get(copy, "tokens");
    let index = object_property_get(copy, "index");
    let i = list_get(tokens, index);
    let match = i === s;
    if (match) {
      object_property_increment(copy, "index");
    }
    object_property_set(copy, "match", match);
    let v2 = [copy];
    return v2;
  };
  return v;
}
