import { list_take } from "./list_take.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { lg_definitions } from "./lg_definitions.mjs";
import { bible_words_eng_score } from "./bible_words_eng_score.mjs";
import { list_filter } from "./list_filter.mjs";
export async function sandbox_3() {
  let dictionary = await lg_definitions();
  let words = await bible_words_eng_score();
  let ms = list_map_property(words, "word");
  let fs = list_filter(ms, (w) => object_property_exists(dictionary, w));
  let ts = list_take(fs, 96);
}
