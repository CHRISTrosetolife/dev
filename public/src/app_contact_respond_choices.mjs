import { app_contact_respond_choices_skip } from "./app_contact_respond_choices_skip.mjs";
import { app_contact_respond_choices_invalid } from "./app_contact_respond_choices_invalid.mjs";
import { list_flatten } from "./list_flatten.mjs";
import { app_contact_phrase_you_optional } from "./app_contact_phrase_you_optional.mjs";
import { names_last } from "./names_last.mjs";
import { match_sequence_optional } from "./match_sequence_optional.mjs";
import { app_contact_match_prayer_god_give } from "./app_contact_match_prayer_god_give.mjs";
import { app_contact_match_amen } from "./app_contact_match_amen.mjs";
import { match_once_or_more } from "./match_once_or_more.mjs";
import { number_to_words } from "./number_to_words.mjs";
import { list_map } from "./list_map.mjs";
import { range_from } from "./range_from.mjs";
import { names_first } from "./names_first.mjs";
import { app_contact_phrase_list_greetings } from "./app_contact_phrase_list_greetings.mjs";
import { app_contact_phrase_god_willing } from "./app_contact_phrase_god_willing.mjs";
import { app_contact_phrase_god } from "./app_contact_phrase_god.mjs";
import { app_share_bless } from "./app_share_bless.mjs";
import { app_contact_phrase_you } from "./app_contact_phrase_you.mjs";
import { match_on } from "./match_on.mjs";
import { match_optional } from "./match_optional.mjs";
import { app_share_how_r_u } from "./app_share_how_r_u.mjs";
import { match_sequence } from "./match_sequence.mjs";
import { app_contact_match } from "./app_contact_match.mjs";
import { match_choice } from "./match_choice.mjs";
import { app_share_praise } from "./app_share_praise.mjs";
import { app_share_thanks } from "./app_share_thanks.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_share_verse_refresh_greet } from "./app_share_verse_refresh_greet.mjs";
import { countries_names } from "./countries_names.mjs";
export function app_contact_respond_choices() {
  let v = [
    [
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
    ],
    app_contact_respond_choices_invalid(),
    app_contact_respond_choices_skip(),
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
        "i",
        "ask",
        app_contact_phrase_you_optional(),
        "teach",
        "me",
        "by",
        "the",
        match_sequence_optional(["grace", "of"]),
        "god",
        match_choice(["sharing", "shared"]),
        "the",
        "living",
        match_choice(["word", "world"]),
        "of",
        "god",
      ]),
      app_contact_match(
        "If God desires, then I will teach you yes. Pray to God every day. Read the Bible every day. If you want me to teach you, then please keep sending me another message on this app.",
      ),
    ),
    match_on(
      match_sequence([
        app_contact_phrase_god(),
        match_optional("will"),
        "bless",
        app_contact_phrase_you(),
        match_sequence_optional(["so", "much"]),
      ]),
      app_contact_match(
        string_combine_multiple([
          "Thanks for the blessing! ",
          app_share_bless(),
        ]),
      ),
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
  ];
  let v2 = list_flatten(v);
  return v2;
}
