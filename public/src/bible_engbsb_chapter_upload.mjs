import { storage_upload_object } from "./storage_upload_object.mjs";
import { bible_storage_path_file_version } from "./bible_storage_path_file_version.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
export async function bible_engbsb_chapter_upload(chapter_name) {
  let bible_folder = "engbsb";
  let data = await bible_chapter(bible_folder, chapter_name);
  let destination = bible_storage_path_file_version(key, bible_folder);
  await storage_upload_object(data, destination);
}
