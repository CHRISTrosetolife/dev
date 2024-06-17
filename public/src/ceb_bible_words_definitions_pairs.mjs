import { assert } from "./assert.mjs";
import { string_match_best_find_index } from "./string_match_best_find_index.mjs";
import { ceb_bible_words_score } from "./ceb_bible_words_score.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { bible_words_eng_score } from "./bible_words_eng_score.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_get } from "./list_get.mjs";
import { number_is } from "./number_is.mjs";
export async function ceb_bible_words_definitions_pairs() {
  let ceb_scores = await ceb_bible_words_score();
  let pairs = list_adder((la) =>
    each(ceb_scores, (w) =>
      each(object_property_get(w, "definitions"), (d) =>
        la({
          ceb: {
            word: object_property_get(w, "word"),
            score: {},
          },
          eng: d,
        }),
      ),
    ),
  );
  let eng_scores = await bible_words_eng_score();
  let eng_words = list_map_property(eng_scores, "word");
  each(pairs, (pair) => {
    let { ceb, eng } = pair;
    let index = string_match_best_find_index(eng, eng_words);
    let eng_score = list_get(eng_scores, index);
    let { score } = eng_score;
    assert(number_is(eng_score));
  });
  return {
    pairs,
    definitions,
  };
}
