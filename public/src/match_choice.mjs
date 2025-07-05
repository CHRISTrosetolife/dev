import { list_map } from "./list_map.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
export function match_choice(choices) {
  let v = function match_choice_inner(input, index) {
    let mapped = list_map(choices, function (choice) {
      let result = choice(input, index);
      return result;
    });
    let filtered = list_filter_property(mapped);
  };
  return v;
}
