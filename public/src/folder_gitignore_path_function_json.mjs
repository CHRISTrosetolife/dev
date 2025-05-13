import { folder_gitignore_path_function } from "./folder_gitignore_path_function.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function folder_gitignore_path_function_json(fn, u) {
  let file_name = file_name_json(u);
  let file_path = folder_gitignore_path_function(fn, file_name);
  return file_path;
}
