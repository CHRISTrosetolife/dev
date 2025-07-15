import { app_contact_respond_choices_greetings } from "./app_contact_respond_choices_greetings.mjs";
import { app_contact_respond_choices_skip } from "./app_contact_respond_choices_skip.mjs";
import { app_contact_respond_choices_invalid } from "./app_contact_respond_choices_invalid.mjs";
import { list_flatten } from "./list_flatten.mjs";
import { app_contact_phrase_you_optional } from "./app_contact_phrase_you_optional.mjs";
import { match_sequence_optional } from "./match_sequence_optional.mjs";
import { app_contact_match_prayer_god_give } from "./app_contact_match_prayer_god_give.mjs";
import { app_contact_match_amen } from "./app_contact_match_amen.mjs";
import { app_contact_phrase_god_willing } from "./app_contact_phrase_god_willing.mjs";
import { app_contact_phrase_god } from "./app_contact_phrase_god.mjs";
import { app_share_bless } from "./app_share_bless.mjs";
import { app_contact_phrase_you } from "./app_contact_phrase_you.mjs";
import { match_on } from "./match_on.mjs";
import { match_optional } from "./match_optional.mjs";
import { match_sequence } from "./match_sequence.mjs";
import { app_contact_match } from "./app_contact_match.mjs";
import { match_choice } from "./match_choice.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_contact_respond_choices() {
  let v = [
    app_contact_respond_choices_greetings(),
    app_contact_respond_choices_invalid(),
    app_contact_respond_choices_skip(),
    [
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
    ],
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
