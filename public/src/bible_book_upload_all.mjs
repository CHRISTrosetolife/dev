import { bible_books } from "./bible_books.mjs";
import { bible_books_each } from "./bible_books_each.mjs";
import { bible_book_upload } from "./bible_book_upload.mjs";
export async function bible_book_upload_all(bible_folder) {
  let books = await bible_books(bible_folder);
  await bible_books_each(bible_folder, lambda);
  async function lambda(book_name) {
    await bible_book_upload(bible_folder, book_name);
  }
}
