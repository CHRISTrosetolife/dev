import { each } from "./each.mjs";
import { each_index } from "./each_index.mjs";
import { ceb_bible_words_definitions_pairs_compute } from "./ceb_bible_words_definitions_pairs_compute.mjs";
export async function ceb_bible_words_definitions_pairs_find(query) {
  let pairs = await ceb_bible_words_definitions_pairs_compute();
  each_index(pairs, (pair, index) => {
    each(list, (item) => {});
  });
}
