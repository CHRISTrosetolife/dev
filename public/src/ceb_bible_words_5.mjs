import { log } from "./log.mjs";
import { bible_ceb_chapter } from "./bible_ceb_chapter.mjs";
import { each_async } from "./each_async.mjs";
import { bible_chapters } from "./bible_chapters.mjs";
import { bible_books } from "./bible_books.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
import { each } from "./each.mjs";
export async function ceb_bible_words_5() {
  let words = await list_adder_unique_async(async (la) => {
    await each_async(await bible_books("engbsb"), async (book_name) => {
      let chapters = await bible_chapters("engbsb", book_name);
      await each_async(chapters, async (chapter_name) => {
        log({
          chapter_name,
        });
        let { ceb } = await bible_ceb_chapter(chapter_name);
        each(ceb, (v) =>
          each(v.tokens, (t) => {
            la(t);
          }),
        );
      });
    });
  });
  return words;
}
