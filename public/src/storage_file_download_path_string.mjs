import { path_join } from "./path_join.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
export function storage_file_download_path_string(file_name) {
  return folder_gitignore_path(path_join(["firebase", file_name]));
}
