import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
export function match_sequence(steps) {
  let v = function match_sequence_inner(a, on_match) {
    let result = a;
    each(steps, function (step) {
      result = step(result);
      let match = object_property_get(result, "match");
      if (!match) {
        let v3 = true;
        return v3;
      }
    });
    if (false) {
    }
    let v2 = [result];
    return v2;
  };
  return v;
}
