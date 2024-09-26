import { bible_words_map } from "./bible_words_map.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { bible_search_lookup_cache } from "./bible_search_lookup_cache.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export async function bible_search(words) {
  let s = string_split_comma(words);
  let symbols = "-–,;:!?.…·'‘’“”()[]{}¶*/&#%•`°|⌃►◄0123456789";
  let i = {};
  let lookup = await bible_search_lookup_cache();
  each_object(lookup, (bible_folder, books) => {
    each_object(books, (chapter_code, chapter_verses) => {
      each(chapter_verses, (c) => {
        let { tokens } = c;
        let mapped = bible_words_map(tokens, symbols);
        each(mapped, (m) => {
          let verses = object_property_initialize(i, m, []);
        });
      });
    });
  });
}
