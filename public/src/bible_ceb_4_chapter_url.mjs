import { string_combine } from "./string_combine.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { path_join } from "./path_join.mjs";
import { list_get } from "./list_get.mjs";
import { ceb_bible_4_chapters_hrefs } from "./ceb_bible_4_chapters_hrefs.mjs";
import { bible_ceb_4_hrefs_books } from "./bible_ceb_4_hrefs_books.mjs";
import { bible_ceb_4_url_base } from "./bible_ceb_4_url_base.mjs";
export async function bible_ceb_4_chapter_url(book_index, chapter_index) {
  let url_base = bible_ceb_4_url_base();
  let book_hrefs = await bible_ceb_4_hrefs_books(url_base);
  let hrefs_chapters = await ceb_bible_4_chapters_hrefs(book_hrefs, book_index);
  let href_chapter = list_get(hrefs_chapters, chapter_index);
  let href_book = list_get(book_hrefs, book_index);
  let url_chapter = path_join([path_dirname(href_book), href_chapter]);
  url_chapter = string_combine(url_base, url_chapter);
  return url_chapter;
}
