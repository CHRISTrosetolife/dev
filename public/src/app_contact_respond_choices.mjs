import { app_contact_phrase_its } from "./app_contact_phrase_its.mjs";
import { list_denest } from "./list_denest.mjs";
import { app_contact_respond_choices_request } from "./app_contact_respond_choices_request.mjs";
import { app_contact_respond_choices_greetings } from "./app_contact_respond_choices_greetings.mjs";
import { app_contact_respond_choices_skip } from "./app_contact_respond_choices_skip.mjs";
import { app_contact_respond_choices_invalid } from "./app_contact_respond_choices_invalid.mjs";
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
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_contact_respond_choices() {
  let v = [
    app_contact_respond_choices_greetings(),
    app_contact_respond_choices_invalid(),
    app_contact_respond_choices_skip(),
    app_contact_respond_choices_request(),
    match_on(
      match_sequence([
        app_contact_phrase_god(),
        match_optional("will"),
        "bless",
        app_contact_phrase_you(),
        match_sequence_optional(["so", "much"]),
      ]),
      app_contact_match(string_combine_multiple([app_share_bless()])),
    ),
    match_on(
      match_sequence([
        "Yes",
        "we",
        "are",
        "want",
        "to",
        "send",
        app_contact_phrase_its(),
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
  let v2 = list_denest(v);
  return v2;
}
