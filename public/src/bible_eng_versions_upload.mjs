import { bible_eng_versions_each } from "./bible_eng_versions_each.mjs";
import { bible_books_upload } from "./bible_books_upload.mjs";
import { bible_book_upload_all } from "./bible_book_upload_all.mjs";
export async function bible_eng_versions_upload() {
  await bible_eng_versions_each(bible_folders, async (bible_folder) => {
    await bible_books_upload(bible_folder);
    await bible_book_upload_all(bible_folder);
  });
}
