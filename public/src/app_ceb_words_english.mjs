import { each } from "./each.mjs";
import { ceb_bible_words_definitions_atoms_cache } from "./ceb_bible_words_definitions_atoms_cache.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function app_ceb_words_english() {
  let { inverted } = await ceb_bible_words_definitions_atoms_cache();
  let english = object_properties(inverted);
  each(english, (e) => {
    object_property_set(inverted, e, null);
  });
  return inverted;
}
