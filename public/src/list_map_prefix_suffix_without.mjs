import { list_map_suffix_without } from "./list_map_suffix_without.mjs";
import { list_map_prefix_without } from "./list_map_prefix_without.mjs";
export function list_map_prefix_suffix_without(file_paths, prefix, suffix) {
  let mapped = list_map_prefix_without(file_paths, prefix);
  let mapped2 = list_map_suffix_without(mapped, suffix);
  return mapped2;
}
