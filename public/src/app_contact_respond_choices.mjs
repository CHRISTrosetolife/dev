import { match_sequence_optional } from "./match_sequence_optional.mjs";
import { app_contact_phrase_amen } from "./app_contact_phrase_amen.mjs";
import { app_contact_match_prayer_god_give } from "./app_contact_match_prayer_god_give.mjs";
import { app_contact_match_amen } from "./app_contact_match_amen.mjs";
import { match_once_or_more } from "./match_once_or_more.mjs";
import { number_to_words } from "./number_to_words.mjs";
import { list_map } from "./list_map.mjs";
import { range_from } from "./range_from.mjs";
import { names_first } from "./names_first.mjs";
import { app_contact_phrase_list_greetings } from "./app_contact_phrase_list_greetings.mjs";
import { app_contact_adds } from "./app_contact_adds.mjs";
import { global_function_property } from "./global_function_property.mjs";
import { app_contact_match_invalid_edit } from "./app_contact_match_invalid_edit.mjs";
import { match_digits_1_to_999 } from "./match_digits_1_to_999.mjs";
import { bible_reference_separator } from "./bible_reference_separator.mjs";
import { app_contact_phrase_god_willing } from "./app_contact_phrase_god_willing.mjs";
import { app_contact_phrase_god } from "./app_contact_phrase_god.mjs";
import { app_share_bless } from "./app_share_bless.mjs";
import { app_contact_phrase_you } from "./app_contact_phrase_you.mjs";
import { match_on } from "./match_on.mjs";
import { app_contact_phrase_jesus } from "./app_contact_phrase_jesus.mjs";
import { match_optional } from "./match_optional.mjs";
import { app_share_how_r_u } from "./app_share_how_r_u.mjs";
import { noop } from "./noop.mjs";
import { match_sequence } from "./match_sequence.mjs";
import { app_contact_match } from "./app_contact_match.mjs";
import { match_choice } from "./match_choice.mjs";
import { app_share_praise } from "./app_share_praise.mjs";
import { app_share_thanks } from "./app_share_thanks.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_share_verse_refresh_greet } from "./app_share_verse_refresh_greet.mjs";
import { countries_names } from "./countries_names.mjs";
export function app_contact_respond_choices() {
  let sequence = ["doing", match_optional("today")];
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
        match_sequence_optional(sequence),
      ]),
      app_contact_match(app_share_how_r_u()),
    ),
    match_on(
      match_sequence([
        "I",
        "really",
        "need",
        "help",
        "from",
        app_contact_phrase_you(),
      ]),
      app_contact_match_invalid_edit("asked for help", "kind of help you need"),
    ),
    match_on(
      match_sequence(["we", "will", "try"]),
      app_contact_match_invalid_edit("said you would try", "what you will try"),
    ),
    match_on(
      match_sequence(["we", "are", "interested", "brother"]),
      app_contact_match_invalid_edit(
        "said you are interested",
        "what you are interested in",
      ),
    ),
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
        "keep",
        "on",
        "praying",
        "for",
        "us",
        "so",
        "that",
        "god's",
        "will",
        "be",
        "done",
        "on",
        "us",
      ]),
      app_contact_match("God, let there be prayer", app_contact_match_amen()),
    ),
    match_on(
      match_sequence(["keep", "sending", "us", "such", "scriptures"]),
      app_contact_match(
        "If you send me a message here 📨, then you will receive a scripture 📖.",
      ),
    ),
    match_on(
      match_sequence([
        app_contact_phrase_god(),
        match_optional("will"),
        "bless",
        app_contact_phrase_you(),
        match_sequence(["so", "much"]),
      ]),
      app_contact_match(app_share_bless()),
    ),
    match_on(
      match_sequence([
        "Yes",
        "we",
        "are",
        "want",
        "to",
        "send",
        "it's",
        "message",
      ]),
      app_contact_match("Feel free to send me a message here!"),
    ),
    match_on(
      match_sequence([
        "maybe",
        app_contact_phrase_god_willing(),
        "he",
        "gives",
        "me",
        "answer",
      ]),
      app_contact_match(app_contact_match_prayer_god_give("an answer")),
    ),
    match_on(
      match_sequence(["only", "we", "have", "Urdu", "translation", "bible"]),
      app_contact_match(
        string_combine_multiple([
          "God, thanks for Bible",
          app_contact_match_amen(),
        ]),
      ),
    ),
    match_on(
      match_sequence(["we", "have", "not", "computer"]),
      app_contact_match(app_contact_match_prayer_god_give("a computer")),
    ),
    match_on(
      match_sequence([
        "you",
        "are",
        "contact",
        "with",
        "us",
        "through",
        "your",
        "message",
        "about",
        "computer",
      ]),
      app_contact_match(
        "If God wills, I will contact you through this app, yes.",
      ),
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
        match_choice([match_sequence(["my", "name", "is"]), "am"]),
        match_choice(names_first()),
        "from",
        match_choice(countries_names()),
      ]),
      app_contact_match("My name is servant Jared."),
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
  ];
  return v;
}
