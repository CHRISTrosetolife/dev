import { list_join_empty } from "./list_join_empty.mjs";
import { list_includes } from "./list_includes.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { keyboard_keys } from "./keyboard_keys.mjs";
import { object_property_get_or } from "./object_property_get_or.mjs";
import { match_fill } from "./match_fill.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { app_contact_respond_choices } from "./app_contact_respond_choices.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
export function app_contact_respond(input) {
  let lower = string_case_lower(input);
  let letters = keyboard_keys();
  list_add(letters, string_split_empty("' "));
  let split = string_split_empty(lower);
  let filtered2 = list_filter(split, function (c) {
    let v = list_includes(letters, c);
    return v;
  });
  let joined = list_join_empty(filtered2);
  let tokens = string_split_space(joined);
  let filtered = list_filter(tokens, string_empty_not_is);
  let choices = app_contact_respond_choices();
  let { data, match } = match_fill(filtered, choices);
  let outputs = object_property_get_or(data, "outputs", []);
  let valid = object_property_get_or(data, "valid", true);
  let output = !match || !valid ? null : list_join_space(outputs);
  let v3 = {
    output,
    valid,
  };
  return v3;
}
