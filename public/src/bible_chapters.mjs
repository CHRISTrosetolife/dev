import { bible_url_htm } from "./bible_url_htm.mjs";
import { list_map } from "./list_map.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
export async function bible_chapters(bible_folder, book_name) {
  let url = bible_url_htm(bible_folder, book_name);
  let root = await html_cache_parse(url);
  let extension = ".htm";
  let hrefs = html_parse_a_hrefs(root, condition);
  function condition(href) {
    if (string_starts_with(href, book_name)) {
      let without = string_prefix_without(href, book_name);
      without = string_suffix_without(without, extension);
      let i = integer_parse(without);
      if (i !== 0) {
        return true;
      }
    }
    return false;
  }
  return list_map(hrefs, (h) => string_suffix_without(h, extension));
}
