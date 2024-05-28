import { each_async } from "./each_async.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
import { file_rename } from "./file_rename.mjs";
import { path_join } from "./path_join.mjs";
import { folder_read } from "./folder_read.mjs";
export async function folder_files_move(
  input_directory,
  file_extension,
  output_directory,
) {
  let file_paths = await folder_read(input_directory, file_extension);
  await each_async(file_paths, lambda);
  async function lambda(file_path) {
    let file_name = path_parse_base(file_path);
    let file_path_new = path_join([output_directory, file_name]);
    await file_rename(file_path, file_path_new);
  }
}
