import { google_search_generic } from "./google_search_generic.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function google_search_lucky(query) {
  assert_arguments_length(arguments, 1);
  let lucky = true;
  ("https://duckduckgo.com/?q=!ducky+");
  await google_search_generic(query, lucky);
}
