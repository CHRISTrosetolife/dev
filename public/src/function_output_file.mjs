import { folder_gitignore_path_function } from "./folder_gitignore_path_function.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { path_join } from "./path_join.mjs";
import { function_run } from "./function_run.mjs";
export async function function_output_file(function_name) {
  let f_path = path_join([function_name, date_string_iso_file() + ".txt"]);
  let fn = function_output_file;
  let output_path = folder_gitignore_path_function(fn, f_path);
  let result = await function_run(function_name, []);
  await file_overwrite_json(output_path, result);
  return output_path;
}
