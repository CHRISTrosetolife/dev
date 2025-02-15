import { each_log_async } from "./each_log_async.mjs";
import { bible_ceb_upload_chapter } from "./bible_ceb_upload_chapter.mjs";
import { bible_books_chapters } from "./bible_books_chapters.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function app_bible_ceb_upload() {
  let bible_version = "cebulb";
  let chapters = await bible_books_chapters(bible_version);
  await each_log_async(chapters, async function (chapter_info) {
    let chapter_code = object_property_get(chapter_info, "chapter_code");
    let v = await bible_ceb_upload_chapter(bible_version, chapter_code);
    return v;
  });
}
