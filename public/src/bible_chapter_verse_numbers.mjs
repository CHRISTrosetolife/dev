import { list_map_property } from "./list_map_property.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
export async function bible_chapter_verse_numbers(bible_folder, chapter_name) {
  let r = await bible_chapter(bible_folder, chapter_name);
  return list_map_property(r, "verse_number");
}
