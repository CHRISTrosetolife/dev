import { each } from "./each.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
export function match_choice(choices) {
  let v = function match_choice_inner(a, on_match) {
    let mapped = list_map(choices, function (choice) {
      let result = choice(a);
      return result;
    });
    let filtered = list_filter_property(mapped, "match", true);
    each(filtered, on_match);
    let v2 = filtered;
    return v2;
  };
  return v;
}
