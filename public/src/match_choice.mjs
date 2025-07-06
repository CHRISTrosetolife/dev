import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { match_functionize } from "./match_functionize.mjs";
import { list_map } from "./list_map.mjs";
import { match_filter } from "./match_filter.mjs";
export function match_choice(choices) {
  assert_arguments_length(arguments, 1);
  let v = function match_choice_inner(a) {
    let mapped = list_map(choices, function (choice) {
      let result = match_functionize(a, choice);
      return result;
    });
    let c = list_concat_multiple(mapped);
    let filtered = match_filter(c);
    return filtered;
  };
  return v;
}
