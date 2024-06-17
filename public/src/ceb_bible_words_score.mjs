import { list_map_property } from "./list_map_property.mjs";
import { list_sum } from "./list_sum.mjs";
export function ceb_bible_words_score() {
  let eng_total = list_sum(list_map_property(words_eng, "count"));
  let ceb_total = list_sum(list_map_property(words_ceb, "count"));
}
