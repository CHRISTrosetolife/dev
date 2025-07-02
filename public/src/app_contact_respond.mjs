import { string_split_space } from "./string_split_space.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_share_verse_refresh_greet } from "./app_share_verse_refresh_greet.mjs";
export function app_contact_respond(input) {
  let lower = string_case_lower(input);
  let tokens = string_split_space(lower);
  let output = null;
  if (list_includes(["hi", "hii"], input)) {
    output = app_share_verse_refresh_greet();
  }
  let nice_to_meet_you = [
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
  ];
  let index = 0;
  if (false) {
  }
  return output;
}
