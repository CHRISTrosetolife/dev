import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function google_search_url(query) {
  return string_combine_multiple([
    url_secure_w3(),
    "google.com/search?q=",
    query,
  ]);
}
