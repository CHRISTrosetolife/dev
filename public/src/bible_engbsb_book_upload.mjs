import { each_async } from "./each_async.mjs";
import { each_range } from "./each_range.mjs";
import { bible_chapters } from "./bible_chapters.mjs";
import { bible_engbsb_chapter_upload } from "./bible_engbsb_chapter_upload.mjs";
import { list_remove_first } from "./list_remove_first.mjs";
export async function bible_engbsb_book_upload(book_name) {
  let chapters = await bible_chapters("engbsb", book_name);
  each_range(2, (item) => {
    list_remove_first(chapters);
  });
  await each_async(list, async (item2) => {});
  await bible_engbsb_chapter_upload(chapters);
}
