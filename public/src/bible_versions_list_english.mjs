import { string_starts_with_curry } from "./string_starts_with_curry.mjs";
import { html_cache_parse_hrefs } from "./html_cache_parse_hrefs.mjs";
import { bible_ebible_url_combine } from "./bible_ebible_url_combine.mjs";
export async function bible_versions_list_english() {
  let url = bible_ebible_url_combine("download.php");
  let book_hrefs = await html_cache_parse_hrefs(
    url,
    string_starts_with_curry("details.php?id=eng"),
  );
  return book_hrefs;
}
