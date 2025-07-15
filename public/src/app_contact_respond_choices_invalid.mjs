import { app_contact_phrase_you } from "./app_contact_phrase_you.mjs";
import { app_contact_match_invalid_edit_help } from "./app_contact_match_invalid_edit_help.mjs";
import { app_contact_phrase_you_optional } from "./app_contact_phrase_you_optional.mjs";
import { app_contact_match_invalid_edit } from "./app_contact_match_invalid_edit.mjs";
import { match_sequence } from "./match_sequence.mjs";
import { match_on } from "./match_on.mjs";
export function app_contact_respond_choices_invalid() {
  let v = [
    match_on(
      match_sequence([
        "i",
        "want",
        "your",
        "guidance",
        "and",
        "support",
        "for",
        "my",
        "children",
      ]),
      app_contact_match_invalid_edit(
        "asked for support",
        "kind of support you need",
      ),
    ),
    match_on(
      match_sequence([
        "i",
        "want",
        app_contact_phrase_you_optional(),
        "to",
        "do",
        "work",
        "with",
        "me",
        "helping",
        "me",
        "to",
        "spread",
        "the",
        "the",
        "word",
        "of",
        "god",
        "in",
        "such",
        "places",
        "where",
        "people",
        "really",
        "need",
        "bible",
      ]),
      app_contact_match_invalid_edit_help(),
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
      app_contact_match_invalid_edit_help(),
    ),
    match_on(
      match_sequence([
        "is",
        "all",
        "about",
        "to",
        "help",
        "us",
        "in",
        "your",
        "ministry",
        "please",
        "kindly",
        "brother",
      ]),
      app_contact_match_invalid_edit_help(),
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
  ];
  return v;
}
