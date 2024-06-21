import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { browser_open } from "./browser_open.mjs";
import { string_to_url } from "./string_to_url.mjs";
export async function google_search_generic(query, lucky) {
  query = string_to_url(query);
  let lucky_url = lucky ? "btnI=1&" : "";
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
