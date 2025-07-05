import { match_functionize } from "./match_functionize.mjs";
import { match_on } from "./match_on.mjs";
import { list_map } from "./list_map.mjs";
export function match_choice(choices, on_match) {
  let v = function match_choice_inner(a) {
    let mapped = list_map(choices, function (choice) {
      let result = match_functionize(choice, a);
      return result;
    });
    let filtered = match_on(mapped, on_match);
    return filtered;
  };
  return v;
}
