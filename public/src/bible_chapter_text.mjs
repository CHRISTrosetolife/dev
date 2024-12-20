import { bible_reference_code } from "./bible_reference_code.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { list_join_space } from "./list_join_space.mjs";
export async function bible_chapter_text(chapter_name) {
  let verses = await bible_chapter("engbsb", chapter_name);
  let m = list_map(verses, (verse) => {
    let { verse_number, tokens } = verse;
    return string_combine_multiple([
      bible_reference_code(chapter_name, [verse_number]),
      " ",
      list_join_space(tokens),
    ]);
  });
  return list_join_newline(m);
}
