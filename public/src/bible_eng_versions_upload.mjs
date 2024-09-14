import { each_async } from "./each_async.mjs";
import { bible_eng_versions } from "./bible_eng_versions.mjs";
import { bible_books_upload } from "./bible_books_upload.mjs";
import { bible_book_upload_all } from "./bible_book_upload_all.mjs";
export async function bible_eng_versions_upload() {
  let bible_folders = bible_eng_versions();
  await each_async(async (bible_folder) => {
    await bible_book_upload_all(bible_folder);
    await bible_books_upload(bible_folder);
  });
}
