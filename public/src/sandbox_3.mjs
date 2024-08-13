import { list_join_newline } from "./list_join_newline.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_take } from "./list_take.mjs";
import { ceb_bible_words_count_cache_new } from "./ceb_bible_words_count_cache_new.mjs";
export async function sandbox_3() {
  let count = 500;
  let wcs = await ceb_bible_words_count_cache_new();
  let taken = list_take(wcs, count);
  let words = list_map_property(taken, "word");
  return list_join_newline(words);
}
