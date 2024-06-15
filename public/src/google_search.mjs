import { url_secure_w3 } from "./url_secure_w3.mjs";
import { browser_open } from "./browser_open.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function google_search(query) {
  assert_arguments_length(arguments, 1);
  await browser_open(
    string_combine_multiple([url_secure_w3(), "google.com/search?q=", query]),
  );
}
