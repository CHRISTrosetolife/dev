import { log } from "./log.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { while_change } from "./while_change.mjs";
import { app_contact_respond_choices } from "./app_contact_respond_choices.mjs";
import { each } from "./each.mjs";
import { app_contact_respond_choice } from "./app_contact_respond_choice.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function app_contact_respond(input) {
  let outputs = [];
  let lower = string_case_lower(input);
  let tokens = string_split_space(lower);
  let choices = app_contact_respond_choices();
  let offset = 0;
  while_change(lambda);
  let finished = offset === list_index_last(tokens);
  let output = !finished ? null : list_join_space(outputs);
  log({
    offset,
    output,
  });
  return output;
  function lambda(change) {
    each(choices, function (choice) {
      log({
        offset,
      });
      let offset_next = app_contact_respond_choice(
        tokens,
        offset,
        outputs,
        choice,
      );
      if (offset_next !== offset) {
        change = true;
        offset = offset_next;
      }
    });
    let v = change;
    return v;
  }
}
