import { tautology } from "./tautology.mjs";
import { folder_files_move_generic } from "./folder_files_move_generic.mjs";
import { file_rename } from "./file_rename.mjs";
export async function folder_files_move(
  input_directory,
  file_extension,
  output_directory,
) {
  let lambda = file_rename;
  await folder_files_move_generic(
    input_directory,
    file_extension,
    output_directory,
    lambda,
    tautology,
  );
}
