import { bible_search_lookup_cache } from "./bible_search_lookup_cache.mjs";
import { each_object } from "./each_object.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function bible_search(words) {
  let s = string_split_comma(words);
  let i = {};
  let l = await bible_search_lookup_cache();
  each_object(l, (bible_folder, books) => {
    each_object(books, (chapter_code, chapter) => {
      let { verse_number, tokens } = chapter;
    });
  });
}
