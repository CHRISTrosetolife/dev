import { bible_words_definitions_atoms_cache } from "./bible_words_definitions_atoms_cache.mjs";
export async function app_language2_upload(from) {
  let { atoms, definitions, inverted } =
    await bible_words_definitions_atoms_cache(from);
}
