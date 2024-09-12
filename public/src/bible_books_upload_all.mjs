import { bible_books_upload } from "./bible_books_upload.mjs";
import { bible_books_each } from "./bible_books_each.mjs";
export async function bible_books_upload_all(bible_folder) {
  await bible_books_each(bible_folder, lambda);
  async function lambda(book_name) {
    await bible_books_upload(bible_folder, book_name);
  }
}
