import { object_property_set } from "./object_property_set.mjs";
import { list_size } from "./list_size.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { noop } from "./noop.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { each } from "./each.mjs";
import { match_on } from "./match_on.mjs";
import { match_functionize } from "./match_functionize.mjs";
export function match_fill(tokens, choices) {
  let a = {
    tokens,
    index: 0,
    data: {},
  };
  object_property_set(a, "match", false);
  let result = a;
  let final = result;
  each(choices, function (choice) {
    result = match_functionize(result, choice);
    let filtered = match_on(result, noop);
    each(filtered, function (f) {});
    let filtered_empty_not = list_empty_not_is(filtered);
    if (filtered_empty_not) {
      let tokens = object_property_get(result, "tokens");
      let index = object_property_get(result, "index");
      let tokens_size = list_size(tokens);
      if (index === tokens_size + 1) {
        object_property_set(result, "match", true);
        final = result;
      }
    }
  });
  return final;
}
