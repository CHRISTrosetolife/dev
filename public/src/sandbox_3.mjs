import { log } from "./log.mjs";
import { bible_books_chapter_each } from "./bible_books_chapter_each.mjs";
export async function sandbox_3() {
  let bible_folder = "engwebu";
  await bible_books_chapter_each(bible_folder, function (chapter) {
    log({
      chapter,
    });
  });
}
