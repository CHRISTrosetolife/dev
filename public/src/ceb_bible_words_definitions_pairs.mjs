import { ceb_bible_words_definitions_pairs_compute_cache } from "./ceb_bible_words_definitions_pairs_compute_cache.mjs";
import { ceb_bible_words_score } from "./ceb_bible_words_score.mjs";
import { object_properties_new } from "./object_properties_new.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
export async function ceb_bible_words_definitions_pairs() {
  let ceb_scores = await ceb_bible_words_score();
  let pairs = await ceb_bible_words_definitions_pairs_compute_cache();
  return {
    pairs: list_map(pairs, (p) =>
      list_map(
        ["ceb", "eng"],
        object_property_get((language) => p[language], "word"),
      ),
    ),
    definitions: list_map(ceb_scores, (w) =>
      object_properties_new(w, ["word", "definitions"]),
    ),
  };
}
