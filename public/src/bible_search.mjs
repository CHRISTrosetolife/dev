import { bible_search_lookup_cache } from "./bible_search_lookup_cache.mjs";
import { log } from "./log.mjs";
import { each_object_values } from "./each_object_values.mjs";
import { each_object } from "./each_object.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function bible_search(words) {
  let s = string_split_comma(words);
  let l = await bible_search_lookup_cache();
  each_object(l, (bible_folder, books) => {
    each_object_values(books, (chapter) => {
      log({
        chapter,
      });
    });
  });
}
