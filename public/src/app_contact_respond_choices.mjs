import { app_contact_phrase_you } from "./app_contact_phrase_you.mjs";
import { match_on } from "./match_on.mjs";
import { app_contact_phrase_jesus } from "./app_contact_phrase_jesus.mjs";
import { match_optional } from "./match_optional.mjs";
import { app_share_how_r_u } from "./app_share_how_r_u.mjs";
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
    match_on(
      match_sequence([
        match_choice(["hello", "greetings", "hi", "hii"]),
        match_optional("sir"),
      ]),
      app_contact_match(app_share_verse_refresh_greet()),
    ),
    match_on(
      match_sequence(["praise", "God"]),
      app_contact_match(app_share_praise()),
    ),
    match_on(
      match_sequence([
        match_choice(["How're", match_sequence(["how", "are"])]),
        app_contact_phrase_you(),
        "doing",
        match_optional("today"),
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
      app_contact_match_invalid(
        "You asked for help. Please edit your message to say what kind of help you need.",
      ),
    ),
    match_on(
      match_choice([
        match_sequence(["in", app_contact_phrase_jesus(), "name"]),
        match_sequence(["in", "the", "name", "of", app_contact_phrase_jesus()]),
        "Amen",
        "and",
      ]),
      noop,
    ),
    match_on(
      match_sequence([
        match_choice(["great", "nice"]),
        "to",
        "meet",
        match_optional("with"),
        app_contact_phrase_you(),
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
      app_contact_match("God, let there be prayer 🙏 amen 🙇."),
    ),
    match_on(
      match_sequence(["keep", "sending", "us", "such", "scriptures"]),
      app_contact_match(
        "If you send me a message here 📨, then you will receive a scripture 📖.",
      ),
    ),
  ];
  return v;
}
