import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { bible_url_base } from "./bible_url_base.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
export async function bible_chapters(bible_folder, book_name) {
  let url_base = bible_url_base(bible_folder);
  let extension = ".htm";
  let url = string_combine_multiple([url_base, book_name, extension]);
  let root = await html_cache_parse(url);
  let hrefs = html_parse_a_hrefs(root, function condition(href) {
    if (string_starts_with(href, book_name)) {
      let without = string_prefix_without(href, book_name);
      without = string_suffix_without(without, extension);
    }
  });
  return hrefs;
}
