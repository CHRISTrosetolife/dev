import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
export function match_sequence(steps) {
  let v = function match_sequence_inner(a, on_match) {
    each(steps, function (step) {
      let result = choice(a);
      let match = object_property_get(result, "match");
    });
    let mapped = list_map(choices, function (choice) {
      return result;
    });
    let filtered = list_filter_property(mapped, "match", true);
    each(filtered, on_match);
    let v2 = filtered;
    return v2;
  };
  return v;
}
