import { folder_previous } from "./folder_previous.mjs";
import { path_join } from "./path_join.mjs";
export function folder_previous_join(name) {
  return path_join([folder_previous(), name]);
}
