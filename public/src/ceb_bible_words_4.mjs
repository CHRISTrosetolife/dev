import { ceb_bible_4_chapters_hrefs } from "./ceb_bible_4_chapters_hrefs.mjs";
import { list_get } from "./list_get.mjs";
import { bible_ceb_4_hrefs_books } from "./bible_ceb_4_hrefs_books.mjs";
import { bible_ceb_4_url_base } from "./bible_ceb_4_url_base.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { path_join } from "./path_join.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine } from "./string_combine.mjs";
export async function ceb_bible_words_4() {
  let url_base = bible_ceb_4_url_base();
  let book_hrefs = await bible_ceb_4_hrefs_books(url_base);
  await each_index_async(book_hrefs, async (href_book_, book_index) => {
    let hrefs_chapters = await ceb_bible_4_chapters_hrefs(
      book_hrefs,
      book_index,
    );
    await each_index_async(
      hrefs_chapters,
      async (href_chapter_, chapter_index) => {
        let url_base = bible_ceb_4_url_base();
        let book_hrefs = await bible_ceb_4_hrefs_books(url_base);
        let href_chapter = list_get(hrefs_chapters, chapter_index);
        let href_book = list_get(book_hrefs, book_index);
        let url_chapter = path_join([path_dirname(href_book), href_chapter]);
        url_chapter = string_combine(url_base, url_chapter);
        let root_chapter = await html_cache_parse(url_chapter);
      },
    );
  });
}
