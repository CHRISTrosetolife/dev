import { bible_verses_upload_chapter } from "./bible_verses_upload_chapter.mjs";
import { bible_books_chapter_each } from "./bible_books_chapter_each.mjs";
export async function bible_verses_upload(bible_folder) {
  await bible_books_chapter_each(bible_folder, async function (chapter) {
    await bible_verses_upload_chapter(bible_folder, chapter);
  });
}
