import { string_prefix_without } from "./string_prefix_without.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_prefix_without(file_paths, prefix) {
  return list_map(file_paths, (p) => string_prefix_without(p, prefix));
}
