import { file_delete } from "./file_delete.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
import { path_join } from "./path_join.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { folder_read } from "./folder_read.mjs";
export async function folder_files_delete(
  input_directory,
  file_extension,
  output_directory,
) {
  let file_paths = await folder_read(input_directory, file_extension);
  await each_index_async(file_paths, async (file_path, index) => {
    let file_name = path_parse_base(file_path);
    let file_path_new = path_join([output_directory, file_name]);
    await file_delete(file_path, file_path_new);
  });
}
