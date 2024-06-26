import { number_power } from "./number_power.mjs";
import { list_to_lookup_key_value_property } from "./list_to_lookup_key_value_property.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_sort_property } from "./list_sort_property.mjs";
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
import { string_case_lower } from "./string_case_lower.mjs";
import { list_includes } from "./list_includes.mjs";
export async function ceb_bible_words_definitions_pairs_compute() {
  let ceb_scores = await ceb_bible_words_score();
  let pairs = list_adder((la) =>
    each(ceb_scores, (w) =>
      each(object_property_get(w, "definitions"), (d) => {
        if (w.word === d) {
          return;
        }
        log({
          d,
        });
        if (list_includes(["thee"], d)) {
          return;
        }
        la({
          ceb: object_properties_new(w, ["word", "score"]),
          eng: {
            word: d,
          },
        });
      }),
    ),
  );
  let eng_scores = await bible_words_eng_score();
  let eng_lookup = list_to_lookup_key_value_property(
    eng_scores,
    "word",
    "score",
  );
  each_index(pairs, (pair, i) => {
    if (0) {
      if (i % 100 === 0) {
        log({
          i,
          s: list_size(pairs),
        });
      }
    }
    let { ceb, eng } = pair;
    let eng_word = eng.word;
    eng_word = string_case_lower(eng_word);
    if (object_property_exists(eng_lookup, eng_word)) {
      eng.score = object_property_get(eng_lookup, eng_word);
    } else {
      eng.score = 0;
    }
    assert(number_is, [eng.score]);
    let [eng_score, ceb_score] = list_map_property([eng, ceb], "score");
    let n = 1;
    pair.score = number_power(
      number_power(eng_score, n) + number_power(ceb_score, n),
      1 / n,
    );
  });
  list_sort_property(pairs, "score");
  list_reverse(pairs);
  return pairs;
}
