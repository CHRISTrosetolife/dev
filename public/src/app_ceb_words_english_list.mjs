import { object_properties } from "./object_properties.mjs";
import { ceb_bible_words_definitions_atoms_cache } from "./ceb_bible_words_definitions_atoms_cache.mjs";
export async function app_ceb_words_english_list() {
  let { inverted } = await ceb_bible_words_definitions_atoms_cache(from);
  let english = object_properties(inverted);
  return english;
}
