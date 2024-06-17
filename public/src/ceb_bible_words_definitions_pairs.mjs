import { list_to_lookup_property } from "./list_to_lookup_property.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip } from "./list_skip.mjs";
import { ceb_bible_words_definitions_pairs_compute_cache } from "./ceb_bible_words_definitions_pairs_compute_cache.mjs";
import { ceb_bible_words_score } from "./ceb_bible_words_score.mjs";
import { object_properties_new } from "./object_properties_new.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_take } from "./list_take.mjs";
export async function ceb_bible_words_definitions_pairs(skip, limit) {
  let ceb_scores = await ceb_bible_words_score();
  let lookup = list_to_lookup_property(ceb_scores, "word");
  let pairs = await ceb_bible_words_definitions_pairs_compute_cache();
  let concise = list_map(pairs, (p) =>
    list_map(["ceb", "eng"], (language) =>
      object_property_get(p[language], "word"),
    ),
  );
  let s = list_skip(concise, skip);
  let l = list_take(s, limit);
  return {
    pairs: l,
    definitions: list_map(l, (item) => {
      let w = lookup[list_first(item)];
      return object_properties_new(w, ["word", "definitions"]);
    }),
  };
}
