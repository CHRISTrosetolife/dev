import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
export async function bible_chapter_text(bible_folder, chapter_name) {
  let verses = await bible_chapter(bible_folder, chapter_name);
  let ts = list_map_property(verses, "tokens");
  let m = list_map(ts, () => {});
  return list_join_newline(list_concat_multiple(t));
}
