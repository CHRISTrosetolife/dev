import { path_join } from "./path_join.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
export function file_copy_path(file_path, output_directory) {
  let file_name = path_parse_base(file_path);
  let file_path_new = path_join([output_directory, file_name]);
  return file_path_new;
}
