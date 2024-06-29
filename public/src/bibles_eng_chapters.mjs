import { bible_books_chapters } from "./bible_books_chapters.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { bible_eng_versions } from "./bible_eng_versions.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { bible_chapters } from "./bible_chapters.mjs";
import { bible_books } from "./bible_books.mjs";
import { each_async } from "./each_async.mjs";
export async function bibles_eng_chapters() {
  return await list_adder_async(async (la) => {
    let bible_folders = bible_eng_versions();
    await each_async(bible_folders, async (bible_folder) => {
      await bible_books_chapters(bible_folder);
      await each_async(await bible_books(bible_folder), async (book_name) => {
        let chapters = await bible_chapters(bible_folder, book_name);
        await each_async(chapters, async (chapter_name) => {
          la(await bible_chapter(bible_folder, chapter_name));
        });
      });
    });
  });
}
