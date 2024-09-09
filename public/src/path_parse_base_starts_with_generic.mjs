import { log } from "./log.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
export function path_parse_base_starts_with_generic(file_path, prefix, n) {
  let file_name = path_parse_base(file_path);
  let p = prefix + n;
  if (0) {
    log({
      file_name,
      p,
    });
  }
  let e = string_starts_with(file_name, p);
  return e;
}
