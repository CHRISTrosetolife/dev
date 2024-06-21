import { string_to_url } from "./string_to_url.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { browser_open } from "./browser_open.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function google_search(query) {
  assert_arguments_length(arguments, 1);
  query = string_to_url(query);
  let luck = false;
  let lucky_url = "btnI=1&";
  await browser_open(
    string_combine_multiple([
      url_secure_w3(),
      "google.com/search?",
      lucky_url,
      "q=",
      query,
    ]),
  );
}
