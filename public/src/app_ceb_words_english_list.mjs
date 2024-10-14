import { bible_words_definitions_atoms_cache } from "./bible_words_definitions_atoms_cache.mjs";
import { object_properties } from "./object_properties.mjs";
export async function app_ceb_words_english_list() {
  let { inverted } = await bible_words_definitions_atoms_cache(from);
  let english = object_properties(inverted);
  return english;
}
