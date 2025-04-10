import { bible_chapters_each } from "./bible_chapters_each.mjs";
import { bible_books_each } from "./bible_books_each.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
export async function bible_books_chapters(bible_folder) {
  return await list_adder_async(async (la) => {
    await bible_books_each(bible_folder, async (book_code) => {
      await bible_chapters_each(
        bible_folder,
        book_code,
        function lambda(chapter_code) {
          la({
            book_code,
            chapter_code,
          });
        },
      );
    });
  });
}
