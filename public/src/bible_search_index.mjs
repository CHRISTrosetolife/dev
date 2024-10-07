import { exit } from "./exit.mjs";
import { log } from "./log.mjs";
import { bible_search_symbols_map } from "./bible_search_symbols_map.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { list_unique } from "./list_unique.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { bible_search_lookup_cache } from "./bible_search_lookup_cache.mjs";
import { string_includes } from "./string_includes.mjs";
export async function bible_search_index() {
  let i = {};
  let lookup = await bible_search_lookup_cache();
  each_object(lookup, (bible_folder, books) => {
    each_object(books, (chapter_code, chapter_verses) => {
      each(chapter_verses, (c) => {
        let { tokens, verse_number } = c;
        let mapped = bible_search_symbols_map(tokens);
        let us = list_unique(mapped);
        each(us, (u) => {
          if (string_includes(u, "?")) {
            log({
              tokens,
              chapter_code,
              bible_folder,
            });
            exit();
          }
          let chapter_codes = object_property_initialize(i, u, {});
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
