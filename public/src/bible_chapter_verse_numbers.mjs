import { bible_chapter } from "./bible_chapter.mjs";
export async function bible_chapter_verse_numbers(bible_folder, chapter_name) {
  await bible_chapter(bible_folder, chapter_name);
}
