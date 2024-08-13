import { log } from "./log.mjs";
import { bible_books_index_old_is } from "./bible_books_index_old_is.mjs";
import { each } from "./each.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
import { each_index_only_async } from "./each_index_only_async.mjs";
import { bible_ceb_4_chapter } from "./bible_ceb_4_chapter.mjs";
import { ceb_bible_4_chapters_hrefs } from "./ceb_bible_4_chapters_hrefs.mjs";
import { bible_ceb_4_hrefs_books } from "./bible_ceb_4_hrefs_books.mjs";
export async function ceb_bible_words_4(args) {
  let words = await list_adder_unique_async(async (la) => {
    let book_hrefs = await bible_ceb_4_hrefs_books();
    await each_index_only_async(book_hrefs, async (book_index) => {
      if (args.new) {
        let old_is = bible_books_index_old_is(book_index);
        if (old_is) {
          return;
        }
      }
      let hrefs_chapters = await ceb_bible_4_chapters_hrefs(
        book_hrefs,
        book_index,
      );
      await each_index_only_async(hrefs_chapters, async (chapter_index) => {
        let verses = await bible_ceb_4_chapter(book_index, chapter_index);
        each(verses, (v) => {
          log({
            v,
          });
          each(v.tokens, (t) => {
            la(t);
          });
        });
      });
    });
  });
  return words;
}
