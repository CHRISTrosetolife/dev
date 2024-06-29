import { list_adder_async } from "./list_adder_async.mjs";
import { bible_chapters } from "./bible_chapters.mjs";
import { bible_books } from "./bible_books.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_books_chapters(bible_folder) {
  return await list_adder_async(async (la) => {
    await each_async(await bible_books(bible_folder), async (book_name) => {
      let chapters = await bible_chapters(bible_folder, book_name);
      await each_async(chapters, async (chapter_name) => {
        la({
          book_name,
          chapter_name,
        });
      });
    });
  });
}
