import { folder_gitignore } from "./folder_gitignore.mjs";
import { path_join } from "./path_join.mjs";
export function path_encoded_parent(folder_name) {
  return path_join([folder_gitignore(), folder_name]);
}
