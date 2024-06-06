import { bible_ceb_4_chapter } from "./bible_ceb_4_chapter.mjs";
import { ceb_bible_4_chapters_hrefs } from "./ceb_bible_4_chapters_hrefs.mjs";
import { bible_ceb_4_hrefs_books } from "./bible_ceb_4_hrefs_books.mjs";
import { each_index_async } from "./each_index_async.mjs";
export async function ceb_bible_words_4() {
  let book_hrefs = await bible_ceb_4_hrefs_books();
  await each_index_async(book_hrefs, async (href_book_, book_index) => {
    let hrefs_chapters = await ceb_bible_4_chapters_hrefs(
      book_hrefs,
      book_index,
    );
    await each_index_async(
      hrefs_chapters,
      async (href_chapter_, chapter_index) => {
        await bible_ceb_4_chapter(book_index, chapter_index);
      },
    );
  });
}
