import { app_language_group_upload } from "./app_language_group_upload.mjs";
import { app_language_upload_result } from "./app_language_upload_result.mjs";
export async function app_language_2_upload_atoms_definitions(
  atoms,
  definitions,
  from,
  to,
) {
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
