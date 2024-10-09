import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { lg_definitions } from "./lg_definitions.mjs";
import { list_adder } from "./list_adder.mjs";
import { bible_words_eng_score } from "./bible_words_eng_score.mjs";
import { list_filter } from "./list_filter.mjs";
export async function sandbox_3() {
  let dictionary = await lg_definitions();
  let words = await bible_words_eng_score();
  list_filter(words, (w) =>
    object_property_exists(
      dictionary,
      object_property_get(object, "property_name"),
    ),
  );
  list_adder((la) => {});
}
