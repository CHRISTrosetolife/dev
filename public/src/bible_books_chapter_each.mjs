import { bible_chapters_each } from "./bible_chapters_each.mjs";
import { bible_books_each } from "./bible_books_each.mjs";
export async function bible_books_chapter_each(bible_folder, lambda) {
  await bible_books_each(bible_folder, async (book_code) => {
    await bible_chapters_each(bible_folder, book_code, lambda);
  });
}
