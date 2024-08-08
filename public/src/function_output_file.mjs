import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { path_join } from "./path_join.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { function_run } from "./function_run.mjs";
export async function function_output_file(function_name) {
  let output_path = folder_gitignore_path(
    path_join([
      function_output_file.name,
      function_name,
      date_string_iso_file() + ".txt",
    ]),
  );
  return output_path;
  let result = await function_run(function_name, []);
}
