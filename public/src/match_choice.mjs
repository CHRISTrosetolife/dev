import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { match_functionize } from "./match_functionize.mjs";
import { match_on } from "./match_on.mjs";
import { list_map } from "./list_map.mjs";
export function match_choice(choices) {
  assert_arguments_length(arguments, 1);
  let v = function match_choice_inner(a) {
    let mapped = list_map(choices, function (choice) {
      let result = match_functionize(a, choice);
      return result;
    });
    let c = list_concat_multiple(mapped);
    return filtered;
  };
  return v;
}
