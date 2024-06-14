import { path_join } from "./path_join.mjs";
import { path_dirname } from "./path_dirname.mjs";
export function path_base_change(file_path_old, base_new) {
  let d = path_dirname(file_path_old);
  let file_name_new = path_join([d, base_new]);
  return file_name_new;
}
