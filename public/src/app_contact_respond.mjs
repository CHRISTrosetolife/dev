import { app_contact_respond_output_invalid } from "./app_contact_respond_output_invalid.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { string_normalize_fancy } from "./string_normalize_fancy.mjs";
import { list_unique_json } from "./list_unique_json.mjs";
import { log } from "./log.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_first } from "./list_first.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_contact_separate } from "./app_contact_separate.mjs";
import { each } from "./each.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { app_contact_alphabet } from "./app_contact_alphabet.mjs";
import { string_only } from "./string_only.mjs";
import { object_property_get_or } from "./object_property_get_or.mjs";
import { match_fill } from "./match_fill.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { app_contact_respond_choices } from "./app_contact_respond_choices.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_contact_respond(d, input) {
  let { lookup, list } = d;
  let normalized = string_normalize_fancy(input);
  let lower = string_case_lower(normalized);
  let alphabet = app_contact_alphabet();
  let joined = string_only(lower, alphabet, " ");
  let tokens = string_split_space(joined);
  let filtered = list_filter(tokens, string_empty_not_is);
  let input_tokens = list_adder(function (la) {
    each(filtered, function (w) {
      let v = object_property_exists(lookup, w);
      let added = false;
      if (!v) {
        let result = [];
        let r = app_contact_separate(list, w, result);
        if (list_empty_not_is(r)) {
          r = list_unique_json(r);
          if (list_multiple_is(r)) {
            log(r);
          }
          let f = list_first(r);
          each(f, la);
          added = true;
        }
      }
      if (!added) {
        la(w);
      }
    });
  });
  let invalid = list_intersect(input_tokens, ["hif"]);
  if (list_empty_not_is(invalid)) {
    let o = string_combine_multiple([
      "Your message contains an invalid word. Please remove invalid words. Invalid word(s): ",
      list_join_comma_space(invalid),
    ]);
    let v3 = app_contact_respond_output_invalid(o);
    return v3;
  }
  if (list_empty_is(input_tokens)) {
    let o = string_combine_multiple([
      "Your message contains no valid words. Please enter valid words",
    ]);
    let v3 = app_contact_respond_output_invalid(o);
    return v3;
  }
  let choices = app_contact_respond_choices();
  let result = match_fill(input_tokens, choices);
  let { data, match } = result;
  let outputs = object_property_get_or(data, "outputs", []);
  let valid = object_property_get_or(data, "valid", true);
  let output = !match ? null : list_join_space(outputs);
  let v3 = {
    output,
    valid,
    outputs,
    tokens: input_tokens,
  };
  return v3;
}
