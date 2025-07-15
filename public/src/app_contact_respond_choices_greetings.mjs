import { number_to_words } from "./number_to_words.mjs";
import { range_from } from "./range_from.mjs";
import { list_map } from "./list_map.mjs";
import { countries_names } from "./countries_names.mjs";
import { names_last } from "./names_last.mjs";
import { names_first } from "./names_first.mjs";
import { app_share_thanks } from "./app_share_thanks.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_share_how_r_u } from "./app_share_how_r_u.mjs";
import { match_sequence_optional } from "./match_sequence_optional.mjs";
import { app_contact_phrase_you } from "./app_contact_phrase_you.mjs";
import { app_share_praise } from "./app_share_praise.mjs";
import { app_contact_phrase_god } from "./app_contact_phrase_god.mjs";
import { app_share_verse_refresh_greet } from "./app_share_verse_refresh_greet.mjs";
import { app_contact_match } from "./app_contact_match.mjs";
import { match_optional } from "./match_optional.mjs";
import { app_contact_phrase_list_greetings } from "./app_contact_phrase_list_greetings.mjs";
import { match_choice } from "./match_choice.mjs";
import { match_sequence } from "./match_sequence.mjs";
import { match_once_or_more } from "./match_once_or_more.mjs";
import { match_on } from "./match_on.mjs";
export function app_contact_respond_choices_greetings() {
  let v = [
    match_on(
      match_once_or_more(
        match_sequence([
          match_choice(app_contact_phrase_list_greetings()),
          match_optional("sir"),
        ]),
        2,
      ),
      app_contact_match(app_share_verse_refresh_greet()),
    ),
    match_on(
      match_sequence(["praise", app_contact_phrase_god()]),
      app_contact_match(app_share_praise()),
    ),
    match_on(
      match_sequence([
        match_choice(["How're", match_sequence(["how", "are"])]),
        app_contact_phrase_you(),
        match_sequence_optional(["doing", match_optional("today")]),
      ]),
      app_contact_match(app_share_how_r_u()),
    ),
    match_on(
      match_sequence([
        match_choice(["great", "nice", "pleasure"]),
        "to",
        "meet",
        match_optional("with"),
        app_contact_phrase_you(),
        match_optional("here"),
      ]),
      app_contact_match(
        string_combine_multiple([
          app_share_thanks(),
          " Great to meet you, too 🤝!",
        ]),
      ),
    ),
    match_on(
      match_sequence([
        match_choice([match_sequence(["my", "name", "is"]), "am"]),
        match_optional("evangelist"),
        match_choice(names_first()),
        match_optional(match_choice(names_last())),
        "from",
        match_choice(countries_names()),
      ]),
      app_contact_match("My name is servant Jared."),
    ),
    match_on(
      match_sequence(["am", "a", "christian"]),
      app_contact_match(
        string_combine_multiple([
          app_share_praise(),
          " that you are a Christian! If we confess Jesus before men, then Jesus will confess us before the Father!",
        ]),
      ),
    ),
    match_on(
      match_sequence([
        "am",
        "married",
        "with",
        match_choice(list_map(range_from(2, 20), number_to_words)),
        "children",
      ]),
      app_contact_match("Thank God for your marriage and children!"),
    ),
    match_on(
      match_sequence([
        "its",
        "a",
        "good",
        "time",
        "to",
        "say",
        "how",
        "are",
        "you",
        "doing",
        "because",
        "is",
        "a",
        "long",
        "time",
        "missing",
        "you",
      ]),
      app_contact_match("Thank God for your marriage and children!"),
    ),
  ];
  return v;
}
