import { bible_reference_separator } from "./bible_reference_separator.mjs";
import { match_digits_1_to_999 } from "./match_digits_1_to_999.mjs";
import { app_contact_adds } from "./app_contact_adds.mjs";
import { global_function_property } from "./global_function_property.mjs";
import { noop } from "./noop.mjs";
import { app_contact_phrase_amen } from "./app_contact_phrase_amen.mjs";
import { app_contact_phrase_jesus } from "./app_contact_phrase_jesus.mjs";
import { match_sequence } from "./match_sequence.mjs";
import { match_choice } from "./match_choice.mjs";
import { match_on } from "./match_on.mjs";
export function app_contact_respond_choices_skip() {
  let v = [
    match_on(
      match_choice([
        match_sequence(["in", app_contact_phrase_jesus(), "name"]),
        match_sequence(["in", "the", "name", "of", app_contact_phrase_jesus()]),
        app_contact_phrase_amen(),
        "and",
        "but",
      ]),
      noop,
    ),
    match_on(
      match_sequence([
        "verse",
        match_choice(
          global_function_property(app_contact_adds, "bible_books_names"),
        ),
        match_digits_1_to_999(),
        bible_reference_separator(),
        match_digits_1_to_999(),
      ]),
      noop,
    ),
  ];
  return v;
}
