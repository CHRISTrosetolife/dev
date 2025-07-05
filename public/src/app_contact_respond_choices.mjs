import { noop } from "./noop.mjs";
import { app_contact_match_invalid } from "./app_contact_match_invalid.mjs";
import { match_sequence } from "./match_sequence.mjs";
import { app_contact_match } from "./app_contact_match.mjs";
import { match_choice } from "./match_choice.mjs";
import { app_share_praise } from "./app_share_praise.mjs";
import { app_share_thanks } from "./app_share_thanks.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_share_verse_refresh_greet } from "./app_share_verse_refresh_greet.mjs";
export function app_contact_respond_choices() {
  let v = [
    match_sequence(
      match_choice(["hello", "greetings"], noop),
      app_contact_match(app_share_verse_refresh_greet()),
    ),
    match_sequence(["praise", "God"], app_contact_match(app_share_praise())),
    match_sequence(
      ["I", "really", "need", "help", "from", "you"],
      app_contact_match_invalid(
        "You asked for help. Please rewrite your message to say what kind of help you need.",
      ),
    ),
    match_sequence(
      ["I", "really", "need", "help", "from", "you"],
      app_contact_match_invalid(
        "You asked for help. Please edit your message to say what kind of help you need.",
      ),
    ),
    match_choice(
      [match_sequence(["in", "Jesus", "name"], noop), "Amen", "and"],
      noop,
    ),
    match_sequence(
      [
        "great",
        "to",
        "meet",
        "with",
        "you",
        "servant",
        "of",
        "the",
        "most",
        "high",
        "god",
      ],
      app_contact_match(
        string_combine_multiple([
          app_share_thanks(),
          " Great to meet you, too 🤝!",
        ]),
      ),
    ),
    match_sequence(
      [
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
      ],
      app_contact_match("God, let there be prayer 🙏 amen 🙇."),
    ),
    match_sequence(
      ["keep", "sending", "us", "such", "scriptures"],
      app_contact_match(
        "If you send me a message here 📨, then you will receive a scripture 📖.",
      ),
    ),
  ];
  return v;
}
