import { file_name_json } from "./file_name_json.mjs";
import { watch } from "./watch.mjs";
import { folder_gitignore_path_function } from "./folder_gitignore_path_function.mjs";
export function watch_git_pause_path() {
  return folder_gitignore_path_function(watch, file_name_json("git_pause"));
}
