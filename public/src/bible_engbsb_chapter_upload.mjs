import { bible_chapter_upload } from "./bible_chapter_upload.mjs";
export async function bible_engbsb_chapter_upload(chapter_name) {
  let bible_folder = "engbsb";
  await bible_chapter_upload(bible_folder, chapter_name);
}
