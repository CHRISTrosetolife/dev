import { ceb_bible_words_definitions_atoms_cache } from "./ceb_bible_words_definitions_atoms_cache.mjs";
import { object_properties } from "./object_properties.mjs";
export async function app_ceb_words_english() {
  let { inverted } = await ceb_bible_words_definitions_atoms_cache();
  let english = object_properties(inverted);
  return english;
}
