import { list_denest } from "./list_denest.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_take } from "./list_take.mjs";
import { each_object } from "./each_object.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { bible_search_symbols_map } from "./bible_search_symbols_map.mjs";
import { bible_search_index_cache } from "./bible_search_index_cache.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { list_map } from "./list_map.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { list_join_space } from "./list_join_space.mjs";
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
  let mapped3 = list_map(mapped2, (m) => list_take(m, cap));
  let mapped4 = await list_map_async(
    mapped3,
    async (word) =>
      await list_map_async(word, async (results) => {
        let { chapter_code, verse_number, versions } = results;
        let t = await list_map_async(versions, async (version) => {
          let chapter = await bible_chapter(version, chapter_code);
          let r = list_find_property(chapter, "verse_number", verse_number);
          let { tokens } = r;
          return {
            chapter_code,
            verse_number,
            version,
            text: list_join_space(tokens),
          };
        });
        return t;
      }),
  );
  let mapped5 = await list_map(mapped4, list_denest);
  return mapped5;
}
