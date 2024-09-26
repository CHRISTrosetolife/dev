import { list_add } from "./list_add.mjs";
import { bible_words_map } from "./bible_words_map.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { bible_search_lookup_cache } from "./bible_search_lookup_cache.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { list_unique } from "./list_unique.mjs";
export async function bible_search(words) {
  let s = string_split_comma(words);
  let symbols = "-–,;:!?.…·'‘’“”()[]{}¶*/&#%•`°|⌃►◄0123456789";
  let i = {};
  let lookup = await bible_search_lookup_cache();
  each_object(lookup, (bible_folder, books) => {
    each_object(books, (chapter_code, chapter_verses) => {
      each(chapter_verses, (c) => {
        let { tokens, verse_number } = c;
        let mapped = bible_words_map(tokens, symbols);
        let u = list_unique(mapped);
        each(mapped, (m) => {
          let chapter_codes = object_property_initialize(i, m, {});
          let verse_numbers = object_property_initialize(
            chapter_codes,
            chapter_code,
            {},
          );
          let folders = object_property_initialize(
            verse_numbers,
            verse_number,
            [],
          );
          list_add(folders, bible_folder);
        });
      });
    });
  });
  return i;
}
