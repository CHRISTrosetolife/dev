import { bible_words_definitions_atoms } from "./bible_words_definitions_atoms.mjs";
import { function_cache } from "./function_cache.mjs";
export async function bible_words_definitions_atoms_cache(language) {
  return await function_cache(bible_words_definitions_atoms, [language]);
}
