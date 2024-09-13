import { bible_eng_versions_each } from "./bible_eng_versions_each.mjs";
import { bible_books_upload } from "./bible_books_upload.mjs";
export async function bible_books_upload_all() {
  await bible_eng_versions_each(lambda);
  async function lambda(bible_folder) {
    await bible_books_upload(bible_folder);
  }
}
