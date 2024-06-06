import { bible_chapter } from "./bible_chapter.mjs";
export async function bible_engbsb_chapter(chapter_name) {
  let bible_folder = "engbsb";
  return await bible_chapter(bible_folder, chapter_name);
}
