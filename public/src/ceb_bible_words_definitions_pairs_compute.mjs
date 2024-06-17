import { list_sort_property } from "./list_sort_property.mjs";
import { list_sum } from "./list_sum.mjs";
import { number_is } from "./number_is.mjs";
import { assert } from "./assert.mjs";
import { list_get } from "./list_get.mjs";
import { string_match_best_find_index } from "./string_match_best_find_index.mjs";
import { list_size } from "./list_size.mjs";
import { log } from "./log.mjs";
import { each_index } from "./each_index.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_words_eng_score } from "./bible_words_eng_score.mjs";
import { object_properties_new } from "./object_properties_new.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { ceb_bible_words_score } from "./ceb_bible_words_score.mjs";
export async function ceb_bible_words_definitions_pairs_compute() {
  let ceb_scores = await ceb_bible_words_score();
  let pairs = list_adder((la) =>
    each(ceb_scores, (w) =>
      each(object_property_get(w, "definitions"), (d) =>
        la({
          ceb: object_properties_new(w, ["word", "score"]),
          eng: {
            word: d,
          },
        }),
      ),
    ),
  );
  let eng_scores = await bible_words_eng_score();
  let eng_words = list_map_property(eng_scores, "word");
  each_index(pairs, (pair, i) => {
    if (i % 100 === 0) {
      log({
        i,
        s: list_size(pairs),
      });
    }
    let { ceb, eng } = pair;
    let index = string_match_best_find_index(eng.word, eng_words);
    eng.score = list_get(eng_scores, index).score;
    assert(number_is, [eng.score]);
    let scores = list_map_property([eng, ceb], "score");
    pair.score = list_sum(scores);
  });
  list_sort_property(pairs, "score");
  return pairs;
}
