import { file_overwrite_open } from "./file_overwrite_open.mjs";
import { folder_gitignore_path_function } from "./folder_gitignore_path_function.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { path_join } from "./path_join.mjs";
export async function file_overwrite_gitignore(file_name, gitignore_fn, text) {
  let f_path = path_join([file_name, date_string_iso_file() + ".txt"]);
  let output_path = folder_gitignore_path_function(gitignore_fn, f_path);
  await file_overwrite_open(output_path, text);
  return output_path;
}
