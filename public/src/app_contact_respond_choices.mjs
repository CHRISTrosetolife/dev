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
    match_choice(
      ["hello", "greetings"],
      app_contact_match(app_share_verse_refresh_greet()),
    ),
    match_sequence(["praise", "God"], app_contact_match(app_share_praise())),
    match_sequence(
      ["I", "really", "need", "help", "from", "you"],
      app_contact_match_invalid(
        "You asked for help. Please rewrite your message to say what kind of help you need.",
      ),
    ),
    match_choice(
      [
        match_sequence(
          ["I", "really", "need", "help", "from", "you"],
          app_contact_match_invalid(
            "You asked for help. Please edit your message to say what kind of help you need.",
          ),
        ),
        "greetings",
      ],
      noop,
    ),
    {
      tokens: ["in", "Jesus", "name"],
      response: "",
    },
    {
      tokens: ["Amen"],
      response: "",
    },
    {
      tokens: ["and"],
      response: "",
    },
    {
      tokens: [
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
      response: string_combine_multiple([
        app_share_thanks(),
        " Great to meet you, too 🤝!",
      ]),
    },
    {
      tokens: [
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
      response: "God, let there be prayer 🙏 amen 🙇.",
    },
    {
      tokens: ["keep", "sending", "us", "such", "scriptures"],
      response:
        "If you send me a message here 📨, then you will receive a scripture 📖.",
    },
  ];
  return v;
}
