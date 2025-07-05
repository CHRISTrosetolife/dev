import { list_single } from "./list_single.mjs";
import { match_string } from "./match_string.mjs";
import { string_is } from "./string_is.mjs";
import { match_on } from "./match_on.mjs";
import { list_map } from "./list_map.mjs";
export function match_choice(choices, on_match) {
  let v = function match_choice_inner(a) {
    let mapped = list_map(choices, function (choice) {
      if (string_is(choice)) {
        choice = match_string(choice);
      }
      let c = choice(a);
      let result = list_single(c);
      return result;
    });
    let filtered = match_on(mapped, on_match);
    return filtered;
  };
  return v;
}
