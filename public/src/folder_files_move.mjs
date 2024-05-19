import { path_parse_base } from "./path_parse_base.mjs";
import { file_rename } from "./file_rename.mjs";
import { add_1 } from "./add_1.mjs";
import { string_to } from "./string_to.mjs";
import { string_combine } from "./string_combine.mjs";
import { path_join } from "./path_join.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { folder_read } from "./folder_read.mjs";
export async function folder_files_move(input_directory, file_extension) {
  let file_paths = await folder_read(input_directory, file_extension);
  await each_index_async(file_paths, async (file_path, index) => {
    let dirname = path_dirname(file_path);
    let file_name = path_parse_base(file_path);
    let file_path_new = path_join([
      dirname,
      string_combine(string_to(add_1(index)), extension),
    ]);
    await file_rename(file_path, file_path_new);
  });
}
