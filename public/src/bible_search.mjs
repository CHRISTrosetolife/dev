import { bible_book_name } from "./bible_book_name.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { json_from } from "./json_from.mjs";
import { list_intersect_multiple } from "./list_intersect_multiple.mjs";
import { json_to } from "./json_to.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_map_async } from "./list_map_async.mjs";
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
  let mapped3 = list_take_soft(intersect, cap);
  let t = await list_map_async(mapped3, async (verse_json) => {
    let verse = json_from(verse_json);
    let { chapter_code, verse_number } = verse;
    let chapter = await bible_chapter("engbsb", chapter_code);
    let r = list_find_property(chapter, "verse_number", verse_number);
    let { tokens } = r;
    let { book_code, chapter_code: chapter_number } =
      bible_chapter_name_parse(chapter_code);
    return {
      book: bible_book_name(book_code),
      chapter_number,
      text: list_join_space(tokens),
    };
  });
  return t;
}
