import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { log } from "./log.mjs";
import { match_functionize } from "./match_functionize.mjs";
import { match_on } from "./match_on.mjs";
import { each } from "./each.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function match_sequence(steps, on_match) {
  assert_arguments_length(arguments, 2);
  let v = function match_sequence_inner(a) {
    let result = a;
    let filtered;
    each(steps, function (step) {
      result = match_functionize(result, step);
      log({
        on_match,
        steps,
        result,
      });
      filtered = match_on(result, on_match);
      if (list_empty_is(filtered)) {
        let v3 = true;
        return v3;
      }
    });
    return filtered;
  };
  return v;
}
