import { json_format_to } from "./json_format_to.mjs";
import { string_is } from "./string_is.mjs";
import { function_run } from "./function_run.mjs";
import { folder_gitignore_path_function } from "./folder_gitignore_path_function.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function function_output_file(function_name) {
  let result = await function_run(function_name, []);
  if (!string_is(result)) {
    result = json_format_to(result);
  }
  let f_path = path_join([function_name, date_string_iso_file() + ".txt"]);
  let output_path = folder_gitignore_path_function(
    function_output_file,
    f_path,
  );
  await file_overwrite(output_path, result);
  return output_path;
}
