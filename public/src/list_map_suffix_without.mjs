import { string_suffix_without } from "./string_suffix_without.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_suffix_without(mapped, suffix) {
  return list_map(mapped, (m) => string_suffix_without(m, suffix));
}
