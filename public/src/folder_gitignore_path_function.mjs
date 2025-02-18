import { folder_gitignore_path_function_parent } from "./folder_gitignore_path_function_parent.mjs";
import { path_join } from "./path_join.mjs";
export function folder_gitignore_path_function(fn, f_path) {
  let v = path_join([folder_gitignore_path_function_parent(fn), f_path]);
  return v;
}
