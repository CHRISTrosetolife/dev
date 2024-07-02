import { bible_chapter } from "./bible_chapter.mjs";
export async function bible_chapter_text(bible_folder, chapter_name) {
  let verses = await bible_chapter(bible_folder, chapter_name);
}
