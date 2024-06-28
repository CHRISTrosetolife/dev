import { bible_engbsb_storage_path_file } from "./bible_engbsb_storage_path_file.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { bible_engbsb_chapter } from "./bible_engbsb_chapter.mjs";
export async function bible_engbsb_books_upload(chapter_name) {
  let data = await bible_engbsb_chapter(chapter_name);
  let destination = bible_engbsb_storage_path_file(chapter_name);
  await storage_upload_object(data, destination);
}
