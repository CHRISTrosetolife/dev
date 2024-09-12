import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { bible_chapters } from "./bible_chapters.mjs";
export async function bible_book_upload(bible_folder, book_name) {
  let chapters = await bible_chapters(bible_folder, book_name);
  await each_async(chapters, async (chapter) => {
    log({
      bible_folder,
      chapter,
    });
    await bible_version_chapter_upload(chapter);
  });
}
