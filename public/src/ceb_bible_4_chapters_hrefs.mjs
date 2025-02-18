import { list_add_first } from "./list_add_first.mjs";
import { html_parse_visit_class_list } from "./html_parse_visit_class_list.mjs";
import { string_take } from "./string_take.mjs";
import { string_index } from "./string_index.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { list_map } from "./list_map.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine } from "./string_combine.mjs";
import { bible_ceb_4_url_base } from "./bible_ceb_4_url_base.mjs";
import { list_get } from "./list_get.mjs";
export async function ceb_bible_4_chapters_hrefs(book_hrefs, book_index) {
  let href_book = list_get(book_hrefs, book_index);
  let url_base = bible_ceb_4_url_base();
  let url = string_combine(url_base, href_book);
  let root_book = await html_cache_parse(url);
  let chapter_elements = html_parse_visit_class_list(root_book, "chap");
  let hrefs_chapters = list_map(chapter_elements, html_parse_href);
  hrefs_chapters = list_map(hrefs_chapters, (h) => {
    let i = string_index(h, "#");
    return string_take(h, i);
  });
  list_add_first(hrefs_chapters, ["1.htm"]);
  return hrefs_chapters;
}
