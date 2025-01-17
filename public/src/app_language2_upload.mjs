import { bible_words_definitions_atoms } from "./bible_words_definitions_atoms.mjs";
import { app_language_upload_result } from "./app_language_upload_result.mjs";
import { app_language_group_upload } from "./app_language_group_upload.mjs";
export async function app_language2_upload(from) {
  let to = "en";
  let { atoms, definitions, inverted } =
    await bible_words_definitions_atoms(from);
  let result_new = app_language_upload_result(atoms, {
    definitions,
  });
  let existing_path = await app_language_group_upload(
    {
      from,
      to,
    },
    "all",
    result_new,
  );
}
