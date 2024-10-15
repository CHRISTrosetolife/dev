import { file_copy_path } from "./file_copy_path.mjs";
import { folder_read_each_generic } from "./folder_read_each_generic.mjs";
export async function folder_files_move_generic(
  input_directory,
  file_extension,
  output_directory,
  lambda,
  filter,
) {
  await folder_read_each_generic(
    input_directory,
    file_extension,
    lambda_each,
    filter,
  );
  async function lambda_each(file_path) {
    let file_path_new = file_copy_path(file_path, output_directory);
    await lambda(file_path, file_path_new);
  }
}
