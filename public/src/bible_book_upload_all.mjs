import { list_includes } from "./list_includes.mjs";
import { bible_books_each } from "./bible_books_each.mjs";
import { bible_book_upload } from "./bible_book_upload.mjs";
export async function bible_book_upload_all(bible_folder) {
  await bible_books_each(bible_folder, lambda);
  async function lambda(book_name) {
    if (list_includes(["engbsb"], bible_folder)) {
      return;
    }
    await bible_book_upload(bible_folder, book_name);
  }
}
