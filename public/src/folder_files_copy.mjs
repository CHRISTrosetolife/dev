import { file_copy } from "./file_copy.mjs";
import { folder_files_move_generic } from "./folder_files_move_generic.mjs";
export async function folder_files_copy(
  input_directory,
  file_extension,
  output_directory,
) {
  let lambda = file_copy;
  await folder_files_move_generic(
    input_directory,
    file_extension,
    output_directory,
    lambda,
  );
}
