import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_share_thanks } from "./app_share_thanks.mjs";
import { log } from "./log.mjs";
import { list_index_is } from "./list_index_is.mjs";
import { list_get } from "./list_get.mjs";
import { each_index } from "./each_index.mjs";
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
  let response = string_combine_multiple([
    app_share_thanks(),
    " Great to meet you, too!",
  ]);
  let match = true;
  each_index(nice_to_meet_you, function (item, index) {
    if (list_index_is(tokens, index)) {
      let current = list_get(tokens, index);
      if (item !== current) {
        match = false;
      }
    } else {
      match = false;
    }
  });
  log({
    match,
    response,
  });
  return output;
}
