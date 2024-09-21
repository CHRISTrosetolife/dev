import { sermon_folder } from "./sermon_folder.mjs";
import { path_join } from "./path_join.mjs";
import { string_combine } from "./string_combine.mjs";
export function sermon_path(name) {
  let file_name = string_combine(name, ".txt");
  let sermon_path_file = path_join([sermon_folder(), file_name]);
  return sermon_path_file;
}
