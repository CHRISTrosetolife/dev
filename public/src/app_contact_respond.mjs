import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { while_change } from "./while_change.mjs";
import { app_contact_respond_choices } from "./app_contact_respond_choices.mjs";
import { each } from "./each.mjs";
import { app_contact_respond_choice } from "./app_contact_respond_choice.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_size } from "./list_size.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_contact_respond(input) {
  let outputs = [];
  let lower = string_case_lower(input);
  let tokens = string_split_space(lower);
  let filtered = list_filter(tokens, string_empty_not_is);
  let choices = app_contact_respond_choices();
  let offset = 0;
  let valid = true;
  while_change(lambda);
  let finished = offset === list_size(filtered);
  let output = !finished ? null : list_join_space(outputs);
  let v2 = {
    output,
    valid,
  };
  return v2;
  function lambda(change) {
    each(choices, function (choice) {
      let { offset: offset_next, valid } = app_contact_respond_choice(
        filtered,
        offset,
        outputs,
        choice,
      );
      if (!choice_valid) {
        valid = choice_valid;
      }
      if (offset_next !== offset) {
        change = true;
        offset = offset_next;
      }
    });
    let v = change;
    return v;
  }
}
