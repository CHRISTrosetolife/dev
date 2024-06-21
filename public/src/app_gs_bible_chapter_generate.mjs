import { bible_chapter } from "./bible_chapter.mjs";
export async function app_gs_bible_chapter_generate(chapter_name) {
  await bible_chapter(chapter_name);
}
