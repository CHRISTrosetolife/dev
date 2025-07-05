import { null_not_is } from "./null_not_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_increment } from "./object_property_increment.mjs";
import { list_get } from "./list_get.mjs";
import { object_copy } from "./object_copy.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_index_is } from "./list_index_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function match_string(s) {
  s = string_case_lower(s);
  let v = function match_string_inner(a) {
    let v3 = list_map(a, function (ai) {
      let copy = object_copy(ai);
      let tokens = object_property_get(copy, "tokens");
      let index = object_property_get(copy, "index");
      if (!list_index_is(tokens, index)) {
        let v2 = null;
        return v2;
      }
      let i = list_get(tokens, index);
      let match = i === s;
      if (match) {
        object_property_increment(copy, "index");
      }
      object_property_set(copy, "match", match);
      return copy;
    });
    let v4 = list_filter(v3, null_not_is);
    return v4;
  };
  return v;
}
