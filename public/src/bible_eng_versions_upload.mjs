import { list_includes } from "./list_includes.mjs";
import { bible_book_upload_all } from "./bible_book_upload_all.mjs";
import { bible_eng_versions_each } from "./bible_eng_versions_each.mjs";
export async function bible_eng_versions_upload() {
  await bible_eng_versions_each(async (bible_folder) => {
    if (list_includes(["engbsb"], bible_folder)) {
      return;
    }
    await bible_book_upload_all(bible_folder);
  });
}
