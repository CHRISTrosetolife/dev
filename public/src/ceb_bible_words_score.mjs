import { each } from "./each.mjs";
import { list_summer } from "./list_summer.mjs";
import { ceb_bible_words_count_cache } from "./ceb_bible_words_count_cache.mjs";
import { bible_words_eng_cache } from "./bible_words_eng_cache.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function ceb_bible_words_score() {
  let words_ceb = await ceb_bible_words_count_cache();
  let ceb_total = list_summer((s) =>
    each(list_map_property(words_ceb, "count"), s),
  );
  return ceb_total;
  let words_eng = await bible_words_eng_cache();
  let eng_total = list_summer(list_map_property(words_eng, "count"));
}
