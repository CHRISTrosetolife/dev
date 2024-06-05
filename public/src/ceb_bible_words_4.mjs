import { path_join } from "./path_join.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { string_take } from "./string_take.mjs";
import { string_index } from "./string_index.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { html_parse_visit_class_list } from "./html_parse_visit_class_list.mjs";
import { html_parse_visit_class_single } from "./html_parse_visit_class_single.mjs";
import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
import { tautology } from "./tautology.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_map } from "./list_map.mjs";
export async function ceb_bible_words_4() {
  let url_base = string_combine_multiple([
    url_secure_w3(),
    "wordproject.org/bibles/ceb/",
  ]);
  let root_bible = await html_cache_parse(url_base);
  let s = html_parse_visit_class_single(
    root_bible,
    "ym-grid linearize-level-2",
  );
  let book_hrefs = html_parse_a_hrefs(s, tautology);
  list_remove(book_hrefs, "index_en.htm#1");
  await each_async(book_hrefs, async (href_book) => {
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
      let url_chapter = path_join([
        url_base,
        path_dirname(href_book),
        href_chapter,
      ]);
      log({
        url_chapter,
      });
      return;
      let root_chapter = await html_cache_parse(href_chapter);
    });
  });
}
