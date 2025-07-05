import { string_is } from "./string_is.mjs";
import { match_on } from "./match_on.mjs";
import { list_map } from "./list_map.mjs";
export function match_choice(choices) {
  let v = function match_choice_inner(a, on_match) {
    let mapped = list_map(choices, function (choice) {
      if (string_is(choice)) {
      }
      let result = choice(a);
      return result;
    });
    let filtered = match_on(mapped, on_match);
    return filtered;
  };
  return v;
}
