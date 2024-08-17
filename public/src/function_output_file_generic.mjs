import { function_run } from "./function_run.mjs";
import { function_output_file } from "./function_output_file.mjs";
import { folder_gitignore_path_function } from "./folder_gitignore_path_function.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { path_join } from "./path_join.mjs";
export async function function_output_file_generic(
  function_name,
  lambda_file_overwrite,
) {
  let f_path = path_join([function_name, date_string_iso_file() + ".txt"]);
  let output_path = folder_gitignore_path_function(
    function_output_file,
    f_path,
  );
  let result = await function_run(function_name, []);
  await lambda_file_overwrite(output_path, result);
  return output_path;
}
