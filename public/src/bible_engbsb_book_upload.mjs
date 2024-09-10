import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { bible_chapters } from "./bible_chapters.mjs";
import { bible_engbsb_chapter_upload } from "./bible_engbsb_chapter_upload.mjs";
export async function bible_engbsb_book_upload(book_name) {
  let chapters = await bible_chapters("engbsb", book_name);
  await each_async(chapters, async (chapter) => {
    log({
      item,
    });
    await bible_engbsb_chapter_upload(chapter);
  });
}
