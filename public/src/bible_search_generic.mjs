import { bible_search_results } from "./bible_search_results.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { bible_reference_code } from "./bible_reference_code.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { list_map_unordered } from "./list_map_unordered.mjs";
import { list_take_soft } from "./list_take_soft.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { bible_search_index_cache } from "./bible_search_index_cache.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function bible_search_generic(words, filter) {
  let split = string_split_comma(words);
  let i = await bible_search_index_cache();
  let filtered = await bible_search_results(split, word_to_results, filter);
  let cap = 10;
  cap = Infinity;
  let mapped3 = list_take_soft(filtered, cap);
  let t = await list_map_unordered(mapped3, async (verse) => {
    let { chapter_code, verse_number } = verse;
    try {
      let chapter = await bible_chapter("engbsb", chapter_code);
      let v = list_find_property(chapter, "verse_number", verse_number);
      let { tokens } = v;
      let r = bible_reference_code(chapter_code, [verse_number]);
      return string_combine_multiple([r, " ", list_join_space(tokens)]);
    } catch (e) {
      return null;
    }
  });
  return t;
  function word_to_results(m) {
    return object_property_get(i, m);
  }
}
