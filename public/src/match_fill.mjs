import { match_filter } from "./match_filter.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_size } from "./list_size.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { match_functionize } from "./match_functionize.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function match_fill(tokens, choices) {
  let a = {
    tokens,
    index: 0,
    data: {},
  };
  object_property_set(a, "match", false);
  let final = a;
  if (list_empty_is(tokens)) {
    let v = final;
    return v;
  }
  match_fill_inner(a);
  return final;
  function match_fill_inner(a) {
    a = [a];
    each(choices, function (choice) {
      let c = match_functionize(a, choice);
      let filtered = match_filter(c);
      each(filtered, function (f) {
        let tokens = object_property_get(f, "tokens");
        let index = object_property_get(f, "index");
        let tokens_size = list_size(tokens);
        if (index === tokens_size) {
          final = f;
        } else {
          match_fill_inner(f);
        }
      });
    });
  }
}
