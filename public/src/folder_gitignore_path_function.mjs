import { path_join } from "./path_join.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
export function folder_gitignore_path_function(fn, f_path) {
  return folder_gitignore_path(path_join([fn.name, f_path]));
}
