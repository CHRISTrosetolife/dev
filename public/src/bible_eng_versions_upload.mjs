import { bible_eng_versions_new } from "./bible_eng_versions_new.mjs";
import { each_async } from "./each_async.mjs";
import { bible_books_upload } from "./bible_books_upload.mjs";
import { bible_book_upload_all } from "./bible_book_upload_all.mjs";
export async function bible_eng_versions_upload() {
  let bible_folders = bible_eng_versions_new();
  await each_async(bible_folders, async (bible_folder) => {
    await bible_books_upload(bible_folder);
    await bible_book_upload_all(bible_folder);
  });
}
