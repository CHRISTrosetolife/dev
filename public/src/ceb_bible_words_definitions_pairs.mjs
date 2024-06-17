import { ceb_bible_words_score } from "./ceb_bible_words_score.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { bible_words_eng_score } from "./bible_words_eng_score.mjs";
export async function ceb_bible_words_definitions_pairs() {
  let ceb_scores = await ceb_bible_words_score();
  let pairs = list_adder((la) =>
    each(ceb_scores, (w) =>
      each(object_property_get(w, "definitions"), (d) =>
        la({
          pair: [object_property_get(w, "word"), d],
        }),
      ),
    ),
  );
  let eng_scores = await bible_words_eng_score();
  return {
    pairs,
    definitions,
  };
}
