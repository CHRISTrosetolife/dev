import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { each } from "./each.mjs";
import { match_on } from "./match_on.mjs";
import { match_functionize } from "./match_functionize.mjs";
import { object_copy } from "./object_copy.mjs";
export function match_fill(choices) {
  let v = function match_choice_inner(a) {
    each(choices, function (choice) {
      let result = match_functionize(a, choice);
      let filtered = match_on([result], on_match);
      if (list_empty_not_is(filtered)) {
      }
      return result;
    });
    return filtered;
  };
  return v;
}
