import { each_async } from "./each_async.mjs";
import { file_delete } from "./file_delete.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
import { folder_read } from "./folder_read.mjs";
export async function folder_files_delete(
  input_directory,
  file_extension,
  output_directory,
) {
  let file_paths = await folder_read(input_directory, file_extension);
  await each_async(file_paths, async (file_path) => {
    let file_name = path_parse_base(file_path);
    await file_delete(file_path);
  });
}
