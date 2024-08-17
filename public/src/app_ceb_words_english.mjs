import { ceb_bible_words_definitions_atoms_cache } from "./ceb_bible_words_definitions_atoms_cache.mjs";
import { object_properties } from "./object_properties.mjs";
export async function app_ceb_words_english() {
  let { atoms, definitions, inverted } =
    await ceb_bible_words_definitions_atoms_cache();
  return object_properties(inverted);
}
