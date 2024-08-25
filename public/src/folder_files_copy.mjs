import { tautology } from "./tautology.mjs";
import { file_copy_generic } from "./file_copy_generic.mjs";
import { folder_files_move_generic } from "./folder_files_move_generic.mjs";
export async function folder_files_copy(
  input_directory,
  file_extension,
  output_directory,
) {
  let filter = tautology;
  let lambda = async (from, to) => await file_copy_generic(from, to, false);
  await folder_files_move_generic(
    input_directory,
    file_extension,
    output_directory,
    lambda,
    tautology,
  );
}
