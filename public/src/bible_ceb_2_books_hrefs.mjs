import { string_combine } from "./string_combine.mjs";
import { list_map } from "./list_map.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function bible_ceb_2_books_hrefs() {
  let url_base = string_combine_multiple([
    url_secure_w3(),
    "talibon.com/bible/",
  ]);
  let url = string_combine_multiple([url_base, "bible.html"]);
  let root_bible = await html_cache_parse(url);
  let book_hrefs = html_parse_a_hrefs(root_bible, function condition(href) {
    return string_ends_with(href, ".html");
  });
  book_hrefs = list_map(book_hrefs, (href) => string_combine(url_base, href));
  return book_hrefs;
}
