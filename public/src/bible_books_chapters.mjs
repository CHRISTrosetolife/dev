import { bible_books_each } from "./bible_books_each.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { bible_chapters } from "./bible_chapters.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_books_chapters(bible_folder) {
  return await list_adder_async(async (la) => {
    await bible_books_each(async (book_code) => {
      function lambda(chapter_code) {
        la({
          book_code,
          chapter_code,
        });
      }
      await each_async(await bible_chapters(bible_folder, book_code), lambda);
    });
  });
}
