import { path_join } from "./path_join.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
export function file_copy_path_generic(d, base_map, to) {
  let b = path_parse_base(d);
  b = base_map(b);
  let file_path_new = path_join([to, b]);
  return file_path_new;
}
