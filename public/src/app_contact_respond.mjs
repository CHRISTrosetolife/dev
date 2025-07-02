import { app_contact_respond_choices } from "./app_contact_respond_choices.mjs";
import { each } from "./each.mjs";
import { app_contact_respond_choice } from "./app_contact_respond_choice.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
export function app_contact_respond(input) {
  let outputs = [];
  let lower = string_case_lower(input);
  let tokens = string_split_space(lower);
  let output = null;
  let choices = app_contact_respond_choices();
  let offset = 0;
  each(choices, function (choice) {
    let offset_next = app_contact_respond_choice(
      tokens,
      offset,
      outputs,
      choice,
    );
    if (false) {
    }
  });
  return output;
}
