import { each_index_only_async } from "./each_index_only_async.mjs";
import { bible_ceb_4_chapter } from "./bible_ceb_4_chapter.mjs";
import { ceb_bible_4_chapters_hrefs } from "./ceb_bible_4_chapters_hrefs.mjs";
import { bible_ceb_4_hrefs_books } from "./bible_ceb_4_hrefs_books.mjs";
export async function ceb_bible_words_4() {
  let book_hrefs = await bible_ceb_4_hrefs_books();
  await each_index_only_async(book_hrefs, async (book_index) => {
    let hrefs_chapters = await ceb_bible_4_chapters_hrefs(
      book_hrefs,
      book_index,
    );
    await each_index_only_async(hrefs_chapters, async (chapter_index) => {
      await bible_ceb_4_chapter(book_index, chapter_index);
    });
  });
}
