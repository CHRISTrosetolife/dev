import { list_unique_json } from "./list_unique_json.mjs";
import { bible_words_definitions_pairs_compute_inner } from "./bible_words_definitions_pairs_compute_inner.mjs";
import { bible_words_score_language } from "./bible_words_score_language.mjs";
import { list_to_lookup_property } from "./list_to_lookup_property.mjs";
import { list_first } from "./list_first.mjs";
import { object_properties_new } from "./object_properties_new.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_filter } from "./list_filter.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function bible_words_definitions_pairs(language) {
  let scores = await bible_words_score_language(language);
  let lookup = list_to_lookup_property(scores, "word");
  let pairs = await bible_words_definitions_pairs_compute_inner(scores);
  let concise_duplicates = list_map(pairs, (p) =>
    list_map(["foreign", "fluent"], (language) =>
      object_property_get(p[language], "word"),
    ),
  );
  let concise = list_unique_json(concise_duplicates);
  let found = {};
  let ds = list_map(concise, (item) => {
    let f = list_first(item);
    if (object_property_exists(found, f)) {
      return null;
    }
    object_property_set(found, f, true);
    let w = lookup[f];
    return object_properties_new(w, ["word", "definitions"]);
  });
  ds = list_filter(ds, null_not_is);
  return {
    pairs: concise,
    definitions: ds,
  };
}
