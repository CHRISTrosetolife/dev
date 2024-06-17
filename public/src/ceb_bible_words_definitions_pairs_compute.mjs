import { list_to_lookup_value_property } from "./list_to_lookup_value_property.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_sort_property } from "./list_sort_property.mjs";
import { list_sum } from "./list_sum.mjs";
import { number_is } from "./number_is.mjs";
import { assert } from "./assert.mjs";
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
import { object_property_exists } from "./object_property_exists.mjs";
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
  let key_property_name = "word";
  let value_property_name = "score";
  let eng_lookup = list_to_lookup_value_property(
    eng_scores,
    key_property_name,
    value_property_name,
  );
  each_index(pairs, (pair, i) => {
    if (i % 100 === 0) {
      log({
        i,
        s: list_size(pairs),
      });
    }
    let { ceb, eng } = pair;
    if (object_property_exists(eng_lookup, eng.word)) {
      eng.score = object_property_get(eng_lookup, eng.word);
    } else {
      eng.score = 0;
    }
    assert(number_is, [eng.score]);
    let scores = list_map_property([eng, ceb], "score");
    pair.score = list_sum(scores);
  });
  list_sort_property(pairs, "score");
  list_reverse(pairs);
  return pairs;
}
