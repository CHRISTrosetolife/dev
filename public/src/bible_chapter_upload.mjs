import { assert_message } from "./assert_message.mjs";
import { bible_storage_version_upload } from "./bible_storage_version_upload.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
export async function bible_chapter_upload(bible_folder, chapter_name) {
  let data = await bible_chapter(bible_folder, chapter_name);
  assert_message(list_empty_not_is, [data], () => ({
    bible_folder,
    chapter_name,
  }));
  await bible_storage_version_upload(bible_folder, chapter_name, data);
}
