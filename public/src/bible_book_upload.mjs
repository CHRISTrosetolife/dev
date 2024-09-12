import { bible_chapters_each } from "./bible_chapters_each.mjs";
import { bible_chapter_upload } from "./bible_chapter_upload.mjs";
import { log } from "./log.mjs";
export async function bible_book_upload(bible_folder, book_name) {
  await bible_chapters_each(bible_folder, book_name, async (chapter) => {
    log({
      bible_folder,
      chapter,
    });
    await bible_chapter_upload(bible_folder, chapter);
  });
}
