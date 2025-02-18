import { path_join } from "./path_join.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
export function folder_gitignore_path_function(fn, f_path) {
  let v = path_join([folder_gitignore_path(fn.name), f_path]);
  return v;
}
