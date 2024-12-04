import { written_extension } from "./written_extension.mjs";
import { path_join } from "./path_join.mjs";
import { string_combine } from "./string_combine.mjs";
export function written_path(written_folder, name) {
  let file_name = string_combine(name, written_extension());
  let sermon_path_file = path_join([written_folder, file_name]);
  return sermon_path_file;
}
