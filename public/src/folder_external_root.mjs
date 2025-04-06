import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
export function folder_external_root(folder) {
  let v = path_join([string_combine_multiple(["D", ":"]), folder]);
  return v;
}
