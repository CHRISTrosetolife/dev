import { bible_storage_version_upload } from "./bible_storage_version_upload.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert } from "./assert.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
export async function bible_chapter_upload(bible_folder, chapter_name) {
  let data = await bible_chapter(bible_folder, chapter_name);
  assert(list_empty_not_is, [data]);
  await bible_storage_version_upload(chapter_name, bible_folder, data);
}
