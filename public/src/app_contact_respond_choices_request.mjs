import { match_choice } from "./match_choice.mjs";
import { match_sequence_optional } from "./match_sequence_optional.mjs";
import { app_contact_phrase_you_optional } from "./app_contact_phrase_you_optional.mjs";
import { app_contact_match_amen } from "./app_contact_match_amen.mjs";
import { app_contact_match } from "./app_contact_match.mjs";
import { match_sequence } from "./match_sequence.mjs";
import { match_on } from "./match_on.mjs";
export function app_contact_respond_choices_request() {
  return [
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
  ];
}
