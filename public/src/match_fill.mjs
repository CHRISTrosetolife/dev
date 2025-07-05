import { app_contact_respond_choice } from "./app_contact_respond_choice.mjs";
import { each } from "./each.mjs";
import { while_change } from "./while_change.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { match_on } from "./match_on.mjs";
import { match_functionize } from "./match_functionize.mjs";
import { list_map } from "./list_map.mjs";
export function match_fill(choices) {
  let v = function match_choice_inner(a) {
    let input = object_property_get(a, "input");
    let index = object_property_get(a, "index");
    while_change(lambda);
    function lambda(change) {
      each(choices, function (choice) {
        let {
          offset: offset_next,
          valid: choice_valid,
          match,
        } = app_contact_respond_choice(filtered, offset, outputs, choice);
        if (match && !choice_valid) {
          let valid = choice_valid;
        }
        if (offset_next !== offset) {
          change = true;
          let offset = offset_next;
        }
      });
      let v = change;
      return v;
    }
    let mapped = list_map(choices, function (choice) {
      let result = match_functionize(a, choice);
      return result;
    });
    let filtered = match_on(mapped, on_match);
    return filtered;
  };
  return v;
}
