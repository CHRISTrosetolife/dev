import { bible_words_definitions_pairs_compute } from "./bible_words_definitions_pairs_compute.mjs";
import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { each_index } from "./each_index.mjs";
export async function ceb_bible_words_definitions_pairs_find(query) {
  let pairs = await bible_words_definitions_pairs_compute(language);
  each_index(pairs, (pair, index) => {
    each(["eng", "ceb"], (language) => {
      if (
        object_property_get(object_property_get(pair, language), "word") ===
        query
      ) {
        log({
          pair,
          index,
        });
      }
    });
  });
}
