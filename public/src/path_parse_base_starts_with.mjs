import { path_parse_base_starts_with_generic } from "./path_parse_base_starts_with_generic.mjs";
export function path_parse_base_starts_with(file_path, n) {
  let e = path_parse_base_starts_with_generic(file_path, prefix, n);
  return e;
}
