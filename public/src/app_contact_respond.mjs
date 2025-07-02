import { log } from "./log.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_share_verse_refresh_greet } from "./app_share_verse_refresh_greet.mjs";
export function app_contact_respond(input) {
  let lower = string_case_lower(input);
  let split = list_split_space(lower);
  log({
    split,
  });
  let output = null;
  if (list_includes(["hi", "hii"], input)) {
    output = app_share_verse_refresh_greet();
  }
  return output;
}
