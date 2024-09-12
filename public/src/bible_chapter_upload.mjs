import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert } from "./assert.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { bible_storage_path_file_version } from "./bible_storage_path_file_version.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
export async function bible_chapter_upload(bible_folder, chapter_name) {
  let data = await bible_chapter(bible_folder, chapter_name);
  assert(list_empty_not_is, [data]);
  let destination = bible_storage_path_file_version(chapter_name, bible_folder);
  await storage_upload_object(data, destination);
}
