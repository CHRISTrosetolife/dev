import { list_join } from "./list_join.mjs";
import { string_replace } from "./string_replace.mjs";
export function path_join(paths) {
  let joined = list_join(paths, "/");
  return string_replace(joined, "//", "/");
}
