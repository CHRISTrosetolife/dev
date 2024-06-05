import { list_join } from "./list_join.mjs";
import { list_map } from "./list_map.mjs";
import { string_replace } from "./string_replace.mjs";
export function path_join(paths) {
  let joined = list_join(paths, "/");
  let mapped = list_map(joined, (m) => string_replace());
  return joined;
}
