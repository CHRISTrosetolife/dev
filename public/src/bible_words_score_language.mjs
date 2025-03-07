import { bible_words_language_count_cache_all } from "./bible_words_language_count_cache_all.mjs";
import { bible_words_definitions_map_choices } from "./bible_words_definitions_map_choices.mjs";
import { bible_words_definitions_all_cache } from "./bible_words_definitions_all_cache.mjs";
import { bible_words_definitions_map_cache } from "./bible_words_definitions_map_cache.mjs";
import { list_to_lookup_key_value_property } from "./list_to_lookup_key_value_property.mjs";
import { summation } from "./summation.mjs";
import { bible_words_score_generic } from "./bible_words_score_generic.mjs";
import { each } from "./each.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_merge } from "./object_merge.mjs";
export async function bible_words_score_language(language) {
  let words = await bible_words_language_count_cache_all(language);
  let lookup = list_to_lookup_key_value_property(words, "word", "count");
  let map = await bible_words_definitions_map_cache(language);
  let definitions = await bible_words_definitions_all_cache(language);
  if (language === "lg") {
  }
  each(definitions, (d) => {
    let choices = bible_words_definitions_map_choices(map, d);
    let count = summation((s) => {
      each(choices, (choice) => {
        if (object_property_exists(lookup, choice)) {
          let choice_count = object_property_get(lookup, choice);
          s(choice_count);
        }
      });
    });
    object_merge(d, {
      count,
    });
  });
  bible_words_score_generic(definitions);
  return definitions;
}
