import { list_single } from "./list_single.mjs";
import { match_functionize } from "./match_functionize.mjs";
import { match_on } from "./match_on.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function match_choice(choices, on_match) {
  let v = function match_choice_inner(a) {
    let mapped = list_map(choices, function (choice) {
      let result = match_functionize(a, choice);
      return result;
    });
    let filtered2 = list_filter(mapped, list_empty_not_is);
    let mapped2 = list_map(filtered2, list_single);
    let filtered = match_on(mapped2, on_match);
    return filtered;
  };
  return v;
}
