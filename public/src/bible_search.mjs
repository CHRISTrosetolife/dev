import { string_digits_is } from "./string_digits_is.mjs";
import { list_map_unordered } from "./list_map_unordered.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { bible_reference_code } from "./bible_reference_code.mjs";
import { json_from } from "./json_from.mjs";
import { list_intersect_multiple } from "./list_intersect_multiple.mjs";
import { json_to } from "./json_to.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { each_object } from "./each_object.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { bible_search_symbols_map } from "./bible_search_symbols_map.mjs";
import { bible_search_index_cache } from "./bible_search_index_cache.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { list_map } from "./list_map.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_take_soft } from "./list_take_soft.mjs";
import { list_filter } from "./list_filter.mjs";
export async function bible_search(words) {
  let s = string_split_comma(words);
  let mapped = bible_search_symbols_map(s);
  let i = await bible_search_index_cache();
  let results = list_map(mapped, (m) => {
    return object_property_get(i, m);
  });
  let mapped2 = list_map(results, (word) =>
    list_adder((la) => {
      each_object(word, (chapter_code, chapter) => {
        each_object(chapter, (verse_number, versions) => {
          la({
            chapter_code,
            verse_number,
            versions,
          });
        });
      });
    }),
  );
  let cap = 10;
  let mapped4 = list_map(mapped2, (word) =>
    list_map(word, (results) => {
      let { chapter_code, verse_number } = results;
      return json_to({
        chapter_code,
        verse_number,
      });
    }),
  );
  let intersect = list_intersect_multiple(mapped4);
  let filtered = list_filter(intersect, (i) => {
    return string_digits_is(object_property_get(i, "property_name"));
  });
  let mapped3 = list_take_soft(intersect, cap);
  let t = await list_map_unordered(mapped3, async (verse_json) => {
    let verse = json_from(verse_json);
    let { chapter_code, verse_number } = verse;
    let chapter = await bible_chapter("engbsb", chapter_code);
    let v = list_find_property(chapter, "verse_number", verse_number);
    let { tokens } = v;
    let r = bible_reference_code(chapter_code, verse_number);
    return string_combine_multiple([r, " ", list_join_space(tokens)]);
  });
  return t;
}
