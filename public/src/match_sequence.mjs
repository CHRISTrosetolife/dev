import { match_functionize } from "./match_functionize.mjs";
import { match_on } from "./match_on.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function match_sequence(steps, on_match) {
  let v = function match_sequence_inner(a) {
    let result = a;
    each(steps, function (step) {
      result = match_functionize(result, step);
      if (list_empty_is(result)) {
        let v3 = true;
        return v3;
      }
      let match = object_property_get(result, "match");
      if (!match) {
        let v3 = true;
        return v3;
      }
    });
    let filtered = match_on([result], on_match);
    return filtered;
  };
  return v;
}
