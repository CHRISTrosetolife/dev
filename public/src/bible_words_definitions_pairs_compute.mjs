import { bible_words_score_language } from "./bible_words_score_language.mjs";
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
import { object_property_exists } from "./object_property_exists.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_includes } from "./list_includes.mjs";
export async function bible_words_definitions_pairs_compute(language) {
  let scores_language = await bible_words_score_language(language);
  let pairs = list_adder((la) =>
    each(scores_language, (w) =>
      each(object_property_get(w, "definitions"), (d) => {
        if (w.word === d) {
          return;
        }
        if (list_includes(["thee"], d)) {
          return;
        }
        la({
          foreign: object_properties_new(w, ["word", "score"]),
          fluent: {
            word: d,
          },
        });
      }),
    ),
  );
  let fluent_scores = await bible_words_eng_score();
  let fluent_lookup = list_to_lookup_key_value_property(
    fluent_scores,
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
    let { foreign, fluent } = pair;
    let fluent_word = fluent.word;
    fluent_word = string_case_lower(fluent_word);
    if (object_property_exists(fluent_lookup, fluent_word)) {
      fluent.score = object_property_get(fluent_lookup, fluent_word);
    } else {
      fluent.score = 0;
    }
    assert(number_is, [fluent.score]);
    let [fluent_score, foreign_score] = list_map_property(
      [fluent, foreign],
      "score",
    );
    let n = 1;
    pair.score = number_power(
      number_power(fluent_score, n) + number_power(foreign_score, n),
      1 / n,
    );
  });
  list_sort_property(pairs, "score");
  list_reverse(pairs);
  return pairs;
}
