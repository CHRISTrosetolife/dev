import { list_get } from "./list_get.mjs";
import { bible_ceb_4_hrefs_books } from "./bible_ceb_4_hrefs_books.mjs";
import { bible_ceb_4_url_base } from "./bible_ceb_4_url_base.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { path_join } from "./path_join.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { string_take } from "./string_take.mjs";
import { string_index } from "./string_index.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { html_parse_visit_class_list } from "./html_parse_visit_class_list.mjs";
import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_map } from "./list_map.mjs";
export async function ceb_bible_words_4() {
  let url_base = bible_ceb_4_url_base();
  let book_hrefs = await bible_ceb_4_hrefs_books(url_base);
  await each_index_async(book_hrefs, async (href_book, book_index) => {
    let book_hrefs = await bible_ceb_4_hrefs_books(url_base);
    list_get(book_hrefs, book_index);
    log({
      href_book,
    });
    let url = string_combine(url_base, href_book);
    let root_book = await html_cache_parse(url);
    let chapter_elements = html_parse_visit_class_list(root_book, "chap");
    let hrefs_chapters = list_map(chapter_elements, html_parse_href);
    hrefs_chapters = list_map(hrefs_chapters, (h) => {
      let i = string_index(h, "#");
      return string_take(h, i);
    });
    await each_async(hrefs_chapters, async (href_chapter) => {
      let url_chapter = path_join([path_dirname(href_book), href_chapter]);
      url_chapter = string_combine(url_base, url_chapter);
      let root_chapter = await html_cache_parse(url_chapter);
    });
  });
}
