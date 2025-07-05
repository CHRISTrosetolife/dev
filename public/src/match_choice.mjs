import { list_concat } from "./list_concat.mjs";
import { log } from "./log.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_single } from "./list_single.mjs";
import { match_functionize } from "./match_functionize.mjs";
import { match_on } from "./match_on.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function match_choice(choices, on_match) {
  assert_arguments_length(arguments, 2);
  let v = function match_choice_inner(a) {
    let mapped = list_map(choices, function (choice) {
      let result = match_functionize(a, choice);
      return result;
    });
    let filtered2 = list_filter(mapped, list_empty_not_is);
    let mapped2 = list_concat(filtered2, list_single);
    let filtered = match_on(mapped2, on_match);
    log({
      filtered,
      choices,
    });
    return filtered;
  };
  return v;
}
