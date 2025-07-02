import { string_split_space } from "./string_split_space.mjs";
import { log } from "./log.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_share_verse_refresh_greet } from "./app_share_verse_refresh_greet.mjs";
export function app_contact_respond(input) {
  let lower = string_case_lower(input);
  let tokens = string_split_space(lower);
  function app_contact_respond_nice_to_meet_you() {
    let v = ["great", "to", "meet", "with", app_contact_respond_you];
    return v;
  }
  function app_contact_respond_you() {
    let v2 = ["you", [[""], ["servant", "of", "the", "most", "high", "god"]]];
    return v2;
  }
  log({
    split: tokens,
  });
  let output = null;
  if (list_includes(["hi", "hii"], input)) {
    output = app_share_verse_refresh_greet();
  }
  return output;
}
