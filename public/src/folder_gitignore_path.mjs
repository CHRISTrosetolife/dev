import { path_join } from "./path_join.mjs";
import { folder_gitignore } from "./folder_gitignore.mjs";
export function folder_gitignore_path(file_path) {
  let folder_gitignore_result = folder_gitignore();
  let folder = path_join([folder_gitignore_result, file_path]);
  return folder;
}
