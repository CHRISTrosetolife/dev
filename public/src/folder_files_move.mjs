import { folder_read_each } from "./folder_read_each.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
import { file_rename } from "./file_rename.mjs";
import { path_join } from "./path_join.mjs";
export async function folder_files_move(
  input_directory,
  file_extension,
  output_directory,
) {
  await folder_read_each(input_directory, file_extension, lambda);
  async function lambda(file_path) {
    let file_name = path_parse_base(file_path);
    let file_path_new = path_join([output_directory, file_name]);
    await file_rename(file_path, file_path_new);
  }
}
