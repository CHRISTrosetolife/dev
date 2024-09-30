import { google_search_url } from "./google_search_url.mjs";
import { string_to_url } from "./string_to_url.mjs";
import { browser_open } from "./browser_open.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function google_search(query) {
  assert_arguments_length(arguments, 1);
  query = string_to_url(query);
  let url = google_search_url(query);
  await browser_open(url);
}
