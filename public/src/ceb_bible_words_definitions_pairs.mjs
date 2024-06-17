import { ceb_bible_words_score } from "./ceb_bible_words_score.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { ceb_bible_words_definitions } from "./ceb_bible_words_definitions.mjs";
import { bible_words_eng_score } from "./bible_words_eng_score.mjs";
export async function ceb_bible_words_definitions_pairs(skip, limit) {
  let definitions = await ceb_bible_words_definitions(skip, limit);
  let ceb_scores = await ceb_bible_words_score();
  let eng_scores = await bible_words_eng_score();
  let pairs = list_adder((la) =>
    each(definitions, (w) =>
      each(object_property_get(w, "definitions"), (d) =>
        la([object_property_get(w, "word"), d]),
      ),
    ),
  );
  return {
    pairs,
    definitions,
  };
}
