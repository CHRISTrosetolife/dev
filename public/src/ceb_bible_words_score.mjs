import { ceb_bible_words_count_cache } from "./ceb_bible_words_count_cache.mjs";
import { bible_words_eng_cache } from "./bible_words_eng_cache.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sum } from "./list_sum.mjs";
export async function ceb_bible_words_score() {
  let words_ceb = await ceb_bible_words_count_cache();
  let ceb_total = list_sum(list_map_property(words_ceb, "count"));
  let words_eng = await bible_words_eng_cache();
  let eng_total = list_sum(list_map_property(words_eng, "count"));
}
