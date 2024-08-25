import { path_join } from "./path_join.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
import { folder_read_each } from "./folder_read_each.mjs";
export async function folder_files_move_generic(
  input_directory,
  file_extension,
  output_directory,
  lambda,
  filter,
) {
  await folder_read_each(input_directory, file_extension, lambda_each);
  async function lambda_each(file_path) {
    let file_name = path_parse_base(file_path);
    let file_path_new = path_join([output_directory, file_name]);
    await lambda(file_path, file_path_new);
  }
}
