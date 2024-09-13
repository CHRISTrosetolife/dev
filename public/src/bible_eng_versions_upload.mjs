import { list_index } from "./list_index.mjs";
import { bible_eng_versions } from "./bible_eng_versions.mjs";
import { bible_book_upload_all } from "./bible_book_upload_all.mjs";
import { bible_eng_versions_each } from "./bible_eng_versions_each.mjs";
export async function bible_eng_versions_upload() {
  let bible_folders = bible_eng_versions();
  await bible_eng_versions_each(async (bible_folder) => {
    let target = "eng-rv";
    if (
      list_index(bible_folders, bible_folder) <
      list_index(bible_folders, target)
    ) {
      return;
    }
    await bible_book_upload_all(bible_folder);
  });
}
