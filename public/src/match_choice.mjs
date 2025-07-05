import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { log } from "./log.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { match_functionize } from "./match_functionize.mjs";
import { match_on } from "./match_on.mjs";
import { list_map } from "./list_map.mjs";
export function match_choice(choices, on_match) {
  assert_arguments_length(arguments, 2);
  let v = function match_choice_inner(a) {
    log({
      choices,
    });
    let mapped = list_map(choices, function (choice) {
      let result = match_functionize(a, choice);
      log({
        result,
      });
      return result;
    });
    let c = list_concat_multiple(mapped);
    let filtered = match_on(c, on_match);
    return filtered;
  };
  return v;
}
