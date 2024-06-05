import { add } from "./add.mjs";
import { file_rename } from "./file_rename.mjs";
import { string_to } from "./string_to.mjs";
import { string_combine } from "./string_combine.mjs";
import { path_join } from "./path_join.mjs";
import { path_extname } from "./path_extname.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { folder_read } from "./folder_read.mjs";
export async function folder_files_rename_incrementing(
  input_directory,
  file_extension,
  starting,
) {
  let file_paths = await folder_read(input_directory, file_extension);
  await each_index_async(file_paths, async (file_path, index) => {
    let dirname = path_dirname(file_path);
    let extension = path_extname(file_path);
    let n = add(starting, index);
    let file_path_new = path_join([
      dirname,
      string_combine(string_to(n), extension),
    ]);
    await file_rename(file_path, file_path_new);
  });
}
