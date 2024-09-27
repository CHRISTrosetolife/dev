import { list_join_newline } from "./list_join_newline.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
export async function bible_chapter_text(bible_folder, chapter_name) {
  let verses = await bible_chapter(bible_folder, chapter_name);
  let t = list_map_property(verses, "tokens");
  return list_join_newline(list_concat_multiple(t));
}
