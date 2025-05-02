import { app_language_2_upload_atoms_definitions } from "./app_language_2_upload_atoms_definitions.mjs";
import { bible_words_definitions_atoms } from "./bible_words_definitions_atoms.mjs";
export async function app_language_2_upload(from) {
  let to = "en";
  let { atoms, definitions, inverted } =
    await bible_words_definitions_atoms(from);
  return await app_language_2_upload_atoms_definitions(
    atoms,
    definitions,
    from,
    to,
    "all",
  );
}
