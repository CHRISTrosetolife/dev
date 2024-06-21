import { string_to_url } from "./string_to_url.mjs";
import { browser_open } from "./browser_open.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function google_search_lucky(query) {
  assert_arguments_length(arguments, 1);
  let url = string_to_url(url);
  let url = string_combine_multiple([
    url_secure_w3(),
    "duckduckgo.com/?q=!ducky+",
    query,
  ]);
  await browser_open(url);
}
