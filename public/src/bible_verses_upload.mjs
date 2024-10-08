import { each_async } from "./each_async.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { bible_books_chapter_each } from "./bible_books_chapter_each.mjs";
export async function bible_verses_upload() {
  let bible_folder = "engbsb";
  await bible_books_chapter_each(bible_folder, async (chapter) => {
    let { book_code, chapter_code } = bible_chapter_name_parse(chapter);
    let verses = await bible_chapter(bible_folder, chapter);
    await each_async(list, async (item) => {});
  });
}
