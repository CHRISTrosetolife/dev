import { noop } from "./noop.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { match_functionize } from "./match_functionize.mjs";
import { match_on } from "./match_on.mjs";
import { each } from "./each.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function match_sequence(steps) {
  assert_arguments_length(arguments, 1);
  let v = function match_sequence_inner(a) {
    let result = a;
    let filtered;
    each(steps, function (step) {
      result = match_functionize(result, step);
      filtered = match_on(result, noop);
      if (list_empty_is(filtered)) {
        let v3 = true;
        return v3;
      }
    });
    return filtered;
  };
  return v;
}
