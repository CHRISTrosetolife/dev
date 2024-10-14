import { bible_words_definitions_map_cache } from "./bible_words_definitions_map_cache.mjs";
import { bible_words_language_count_cache } from "./bible_words_language_count_cache.mjs";
import { ceb_bible_words_definitions_map_choices } from "./ceb_bible_words_definitions_map_choices.mjs";
import { list_to_lookup_key_value_property } from "./list_to_lookup_key_value_property.mjs";
import { summation } from "./summation.mjs";
import { bible_words_score_generic } from "./bible_words_score_generic.mjs";
import { ceb_bible_words_definitions_all_cache } from "./ceb_bible_words_definitions_all_cache.mjs";
import { each } from "./each.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_merge } from "./object_merge.mjs";
export async function bible_words_score_language(language) {
  let words_ceb = await bible_words_language_count_cache({
    new: false,
    language,
  });
  let lookup = list_to_lookup_key_value_property(words_ceb, "word", "count");
  let map = await bible_words_definitions_map_cache(language);
  let definitions = await ceb_bible_words_definitions_all_cache();
  each(definitions, (d) => {
    let choices = ceb_bible_words_definitions_map_choices(map, d);
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
