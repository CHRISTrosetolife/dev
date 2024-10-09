import { bible_chapter } from "./bible_chapter.mjs";
export async function bible_cebulb_chapter(chapter_name) {
  return await bible_chapter("cebulb", chapter_name);
}
