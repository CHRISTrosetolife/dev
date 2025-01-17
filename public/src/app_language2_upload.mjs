import { app_language_group_upload } from "./app_language_group_upload.mjs";
import { bible_words_definitions_atoms_cache } from "./bible_words_definitions_atoms_cache.mjs";
export async function app_language2_upload(from) {
  let to = "en";
  let { atoms, definitions, inverted } =
    await bible_words_definitions_atoms_cache(from);
  let existing_path = await app_language_group_upload(
    {
      from,
      to,
    },
    group_index,
    result_new,
  );
}
