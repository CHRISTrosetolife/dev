import { identity } from "./identity.mjs";
import { folder_files_copy_generic } from "./folder_files_copy_generic.mjs";
import { tautology } from "./tautology.mjs";
export async function folder_files_copy(
  input_directory,
  file_extension,
  output_directory,
) {
  let filter = tautology;
  await folder_files_copy_generic(
    input_directory,
    file_extension,
    output_directory,
    filter,
    identity,
  );
}
