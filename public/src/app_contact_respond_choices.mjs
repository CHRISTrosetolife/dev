import { app_share_thanks } from "./app_share_thanks.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_share_verse_refresh_greet } from "./app_share_verse_refresh_greet.mjs";
export function app_contact_respond_choices() {
  let v = [
    {
      choice: ["hi"],
      response: app_share_verse_refresh_greet(),
    },
    {
      choice: [
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
        " Great to meet you, too!",
      ]),
    },
    {
      choice: [
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
      response: "God let there be prayer 🙏 amen.",
    },
    {
      choice: ["keep", "sending", "us", "such", "scriptures"],
      response:
        "If you send me a message here 📨, then you will receive a scripture 📖.",
    },
    {
      choice: ["and"],
      response: "",
    },
  ];
  return v;
}
