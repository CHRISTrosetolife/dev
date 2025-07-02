import { app_contact_respond_choice } from "./app_contact_respond_choice.mjs";
import { and } from "./and.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_share_thanks } from "./app_share_thanks.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_share_verse_refresh_greet } from "./app_share_verse_refresh_greet.mjs";
export function app_contact_respond(input) {
  let outputs = [];
  let lower = string_case_lower(input);
  let tokens = string_split_space(lower);
  let output = null;
  if (list_includes(["hi", "hii"], input)) {
    output = app_share_verse_refresh_greet();
  }
  let hi = {
    choice: ["hi"],
    response: app_share_verse_refresh_greet(),
  };
  let nice_to_meet_you = {
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
    response: app_share_verse_refresh_greet(),
  };
  let response = string_combine_multiple([
    app_share_thanks(),
    " Great to meet you, too!",
  ]);
  let pray = {
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
      "and",
      "keep",
      "sending",
      "us",
      "such",
      "scriptures",
    ],
    response: app_share_verse_refresh_greet(),
  };
  let scripture = {
    choice: ["keep", "sending", "us", "such", "scriptures"],
    response: app_share_verse_refresh_greet(),
  };
  let and = {
    choice: ["and"],
    response: app_share_verse_refresh_greet(),
  };
  let offset = 0;
  offset = app_contact_respond_choice(
    tokens,
    offset,
    outputs,
    response,
    nice_to_meet_you,
  );
  return output;
}
