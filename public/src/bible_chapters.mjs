import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { bible_url_base } from "./bible_url_base.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function bible_chapters(bible_folder, book_name) {
  let url_base = bible_url_base(bible_folder);
  let url = string_combine_multiple([url_base, book_name, ".htm"]);
  let root = await html_cache_parse(url);
  let hrefs = html_parse_a_hrefs(root, function condition(href) {
    return string_starts_with(href, book_name);
  });
}
