import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { list_join_space } from "./list_join_space.mjs";
export async function bible_chapter_text(bible_folder, chapter_name) {
  let verses = await bible_chapter(bible_folder, chapter_name);
  let m = list_map(verses, (verse) => {
    let { verse_number, tokens } = verse;
    return $s, verse_number, " ", list_join_space(tokens);
  });
  return list_join_newline(list_concat_multiple(t));
}
