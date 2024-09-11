import { storage_upload_object_bible_engbsb } from "./storage_upload_object_bible_engbsb.mjs";
import { bible_engbsb_chapter } from "./bible_engbsb_chapter.mjs";
export async function bible_engbsb_chapter_upload(chapter_name) {
  let data = await bible_engbsb_chapter(chapter_name);
  await storage_upload_object_bible_engbsb(chapter_name, data);
}
