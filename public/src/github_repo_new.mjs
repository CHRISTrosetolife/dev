import { folder_previous } from "./folder_previous.mjs";
import { path_join } from "./path_join.mjs";
export function github_repo_new(name) {
  let path = path_join([folder_previous(), name]);
}
