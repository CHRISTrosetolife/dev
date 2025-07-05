import { noop } from "./noop.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { each } from "./each.mjs";
import { match_on } from "./match_on.mjs";
import { match_functionize } from "./match_functionize.mjs";
export function match_fill(choices) {
  let v = function match_choice_inner(a) {
    let result = a;
    each(choices, function (choice) {
      result = match_functionize(result, choice);
      let filtered = match_on([result], noop);
      let filtered_empty_not = list_empty_not_is(filtered);
      if (filtered_empty_not) {
        match_choice_inner(result);
      }
    });
    return result;
  };
  return v;
}
