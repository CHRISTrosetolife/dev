import { bible_chapter } from "./bible_chapter.mjs";
import { storage_upload_object_bible_engbsb } from "./storage_upload_object_bible_engbsb.mjs";
export async function bible_engbsb_chapter_upload(chapter_name) {
  let bible_folder = "engbsb";
  let data = await bible_chapter(bible_folder, chapter_name);
  await storage_upload_object_bible_engbsb(chapter_name, data);
}
