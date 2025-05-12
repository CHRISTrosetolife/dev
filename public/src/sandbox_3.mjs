import { bible_chapter_parsed } from "./bible_chapter_parsed.mjs";
import { log } from "./log.mjs";
import { bible_books_chapter_each } from "./bible_books_chapter_each.mjs";
export async function sandbox_3() {
  let bible_folder = "engwebu";
  await bible_books_chapter_each(bible_folder, async function (chapter) {
    let root = await bible_chapter_parsed(bible_folder, chapter_name);
    log({
      chapter,
    });
  });
}
