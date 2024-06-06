import { each } from "./each.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { error } from "./error.mjs";
import { html_parse_visit_attribute_value_single } from "./html_parse_visit_attribute_value_single.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine } from "./string_combine.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { path_join } from "./path_join.mjs";
import { list_get } from "./list_get.mjs";
import { ceb_bible_4_chapters_hrefs } from "./ceb_bible_4_chapters_hrefs.mjs";
import { bible_ceb_4_hrefs_books } from "./bible_ceb_4_hrefs_books.mjs";
import { bible_ceb_4_url_base } from "./bible_ceb_4_url_base.mjs";
export async function bible_ceb_4_chapter(book_index, chapter_index) {
  let url_base = bible_ceb_4_url_base();
  let book_hrefs = await bible_ceb_4_hrefs_books(url_base);
  let hrefs_chapters = await ceb_bible_4_chapters_hrefs(book_hrefs, book_index);
  let href_chapter = list_get(hrefs_chapters, chapter_index);
  let href_book = list_get(book_hrefs, book_index);
  let url_chapter = path_join([path_dirname(href_book), href_chapter]);
  url_chapter = string_combine(url_base, url_chapter);
  let root_chapter = await html_cache_parse(url_chapter);
  let tb = html_parse_visit_attribute_value_single(
    root_chapter,
    "id",
    "textBody",
  );
  let p = html_parse_visit_tag_single(tb, "p");
  let { children } = p;
  each(children, (c) => {
    let { type } = c;
    if (type === "text") {
    }
  });
  error();
}
