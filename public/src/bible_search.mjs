import { each_object } from "./each_object.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { bible_search_symbols_map } from "./bible_search_symbols_map.mjs";
import { bible_search_index_cache } from "./bible_search_index_cache.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { list_map } from "./list_map.mjs";
import { list_first } from "./list_first.mjs";
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
  let r0 = list_first(results);
  return object_properties(r0);
}
