import { list_adder } from "./list_adder.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { each_index } from "./each_index.mjs";
import { ceb_bible_words_definitions_pairs_compute } from "./ceb_bible_words_definitions_pairs_compute.mjs";
export async function ceb_bible_words_definitions_pairs_find(query) {
  let pairs = await ceb_bible_words_definitions_pairs_compute();
  return list_adder((la) => {
    each_index(pairs, (pair, index) => {
      each(["eng", "ceb"], (language) => {
        if (
          object_property_get(object_property_get(pair, language), "word") ===
          query
        ) {
          la({
            pair,
            index,
          });
        }
      });
    });
  });
}
