import { path_join } from "./path_join.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
export function file_copy_path_generic(
  file_path_input,
  output_folder,
  base_map,
) {
  let b = path_parse_base(file_path_input);
  b = base_map(b);
  let file_path_new = path_join([output_folder, b]);
  return file_path_new;
}
