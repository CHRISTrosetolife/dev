import { path_join } from "./path_join.mjs";
import { folder_gitignore } from "./folder_gitignore.mjs";
export function folder_gitignore_path(bible_folder) {
  let folder_gitignore_result = folder_gitignore();
  let folder = path_join([folder_gitignore_result, bible_folder]);
  return folder;
}
